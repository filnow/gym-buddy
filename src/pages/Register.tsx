import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSignUp } from '../api/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/Routes';

interface SignUpFormProps {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Register() {

  const navigate = useNavigate();

  const methods = useForm<SignUpFormProps>({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const { mutate, isLoading } = useSignUp();

  const {
    handleSubmit,
    watch,
  } = methods;

  const onSubmit = (data: SignUpFormProps) => {
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: (response) => {
          console.log(response);
          navigate(ROUTES.HOME);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            REGISTER
          </Typography>
          <Box component="form" onClick={handleSubmit(onSubmit)} noValidate className='mt-5'>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register and Sign In
            </Button>
          </Box>
        </Box>
      </Container>
  );
}