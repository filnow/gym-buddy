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

  const { mutate, isLoading } = useSignUp();

  const { register, handleSubmit, watch} = useForm<SignUpFormProps>();

  const onSubmit = (data: SignUpFormProps) => {
    console.log(data);
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
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate className='mt-5'>
          <TextField
            margin="normal"
            required
            fullWidth
            type='email'
            label='Email'
            {...register("email", { required: true })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type='password'
            label='Password'
            {...register("password", { required: true })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type='password'
            label='Confirm Password'
            {...register("confirmPassword", {
              required: true,
              validate: (value: string) =>
                value === watch('password') || "The passwords do not match",
            })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            Register and Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}