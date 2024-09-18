import { React } from 'react';
import { Button, Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/LoginPage.css';

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

const LoginPage = () => {
    const {register, handleSubmit,  formState: { errors } } = useForm();
    const { login , errors : loginErrors} = useAuth();
    const onSubmit = handleSubmit(async (data) => {
        login(data)
    })
  return (
    <div className='login-form'>
      <Box 
      component={'form'}
      className='login'
      onSubmit={onSubmit}    
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          gap: '1rem',
        },
      }}
    >
      <h1 style={{color: 'white', fontSize: '2rem'}}>Login</h1>
      
<OneInput
  label="Email"
  type='email'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.email ? errors.email.message : ''} 
  error={!!errors.email}
  {...register('email', { 
    required: 'El email es obligatorio',
    pattern: {
      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
      message: 'El formato del email no es válido'
    }
  })}
 />

<OneInput
  label="Contraseña"
  type='password'
  color='secondary'
  variant='filled'
  size='small'
  helperText={errors.password ? errors.password.message : ''} 
  error={!!errors.password}
  {...register('password', { required: 'La contraseña es obligatoria' })} // Añadimos un mensaje personalizado
/>
        {
        loginErrors && loginErrors.length > 0 && loginErrors.map((error, index) => (
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
        Entrar
      </Button>

      <p>¿No tienes cuenta?<Link to='/register' style={{textDecoration: 'none', color: 'white', marginLeft: '1rem'}}>Registrate!</Link></p>
    </Box>
    </div>
  );
};

export default LoginPage;