import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";
import { ROUTES } from '../constants/Routes';
import { styled } from '@mui/material'
import { useSignIn } from "../api/auth";
import { useAppDispatch } from '../store/store';
import { login } from "../slices/authSlice";
import { useForm } from 'react-hook-form';
import { LoginFormProps } from '../types/FormType';
import { useState } from 'react';
import SplashScreen from '../components/SplashScreen';


const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.dark,
  },
}));


export default function Login() {
  
  const [splash, setSplash] = useState(false)
  const {mutate, isLoading} = useSignIn();
  const dispatch = useAppDispatch();
  const { register, handleSubmit} = useForm<LoginFormProps>();

  const onSubmit = (data: LoginFormProps) => {
    mutate(
      { email: data.email, password: data.password },
      {
        onSuccess: (response) => {
          dispatch(
            login({
              uid: response.uid,
            })
          );
          setSplash(true);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };


  return (
      splash ? 
      <SplashScreen setSplash={setSplash}/>
      :
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
            Login
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Login
            </Button>
            <Typography component="h1" variant="h5" sx={{ ml: 3 }}>
              Don't have an account? <StyledLink to={ROUTES.REGISTER}>Register</StyledLink>
            </Typography>
          </Box>
        </Box>
      </Container>
    
  );
}