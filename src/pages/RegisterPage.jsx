import { React, useEffect } from 'react';
import { Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/RegisterPage.css';

const OneInput = styled(TextField)({
    '& .MuiInputBase-input': {
        color: 'white'
    },
    '& .MuiInputBase-input': {
    fontSize: '15px',  // Cambia el tamaño de la fuente
    color: '#white',      // Cambia el color del texto
  },
  '& .MuiInputLabel-root': {
    fontSize: '15px',   // Cambia el tamaño de la fuente del label
    color: 'white',      // Color del label
  },
  '& .MuiFilledInput-underline:before': {
    borderBottomColor: 'gray',  // Color del borde inferior antes de enfocarse
  },
  '& .MuiFilledInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'black',  // Color del borde inferior al hacer hover
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: 'white',  // Color del borde inferior después de enfocarse
  },
  '& .MuiFormHelperText-root': {
    fontSize: '12px',   // Tamaño del texto de ayuda (helperText)
    color: '#f44336',   // Color del helperText (por defecto es rojo si hay error)
  },
  '& .MuiInputBase-input:focus': {
    color: 'white',  // Cambia el color del texto cuando el campo está en foco
  }
})

const RegisterPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password'); // Observa el campo de contraseña
  const { signup, isAuthenticated, errors : registerErrors } = useAuth(); // Cambiado a "signup"
  const navigation = useNavigate(); // Obtenemos el hook de navegación

  useEffect(() => {
    if (isAuthenticated) navigation('/caps');
  }, [isAuthenticated]);

  const sendForm = handleSubmit(async (data) => {
    await signup(data); // Usamos "signup" en lugar de "singup"
  });

  return (
    <div className='register-form'>
    <Box 
      component={'form'}
      onSubmit={sendForm}    
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        '& > *': {
          gap: '1rem',
        },
      }}
    >
      <h1>Registro</h1>
      
      <OneInput
  label="Username"
  type='text'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.username ? errors.username.message : ''} 
  {...register('username', { required: 'El nombre de usuario es obligatorio' })} // Añadimos un mensaje personalizado
  error={!!errors.username}
/>

<OneInput
  label="Email"
  type='email'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.email ? errors.email.message : ''} 
  {...register('email', { 
    required: 'El email es obligatorio',
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: 'El formato del email no es válido'
    }
  })}
  error={!!errors.email}
/>

<OneInput
  label="Contraseña"
  type='password'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.password ? errors.password.message : ''} 
  {...register('password', { required: 'La contraseña es obligatoria' })} // Añadimos un mensaje personalizado
  error={!!errors.password}
/>

<OneInput
  label="Confirma tu contraseña"
  type='password'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.confirmPassword ? errors.confirmPassword.message : ''} 
  {...register('confirmPassword', {
    required: 'Confirma tu contraseña', 
    validate: (value) => value === password || 'Las contraseñas no coinciden'
  })}
  error={!!errors.confirmPassword}
/>
        {
        registerErrors && registerErrors.length > 0 && registerErrors.map((error, index) => (
            <Box sx={{ backgroundColor: 'red', marginTop: '1rem', color: 'white' , padding: '0.5rem', borderRadius: '5px' }} key={index}>
            <CloseIcon sx={{ color: 'white', float: 'left'}} />
            {error}
            </Box>
        ))
}



      <Button
        variant="text"
        color="secondary"
        type='submit'
        size='medium'
        sx={{ 
            marginTop: 2,
            color: 'white', // Color del texto del botón
            '&:hover': {
            backgroundColor: 'black', // Fondo al hacer hover
            color: 'white', // Texto al hacer hover
            },
            '&:focus': {
            outline: 'none',
            backgroundColor: 'gray', // Fondo al enfocarse
            color: 'white', // Texto al enfocarse
            },
            '&:before': {
            borderColor: 'black', // Cambiar el color del borde (si aplica)
            }
        }}
      >
        Registrarme!
      </Button>

      <p>¿Ya tienes una cuenta?<Link to='/login' style={{textDecoration: 'none', color: 'white', marginLeft: '1rem'}}>Logueate!</Link></p>
    </Box>
    </div>
  );
};

export default RegisterPage;
