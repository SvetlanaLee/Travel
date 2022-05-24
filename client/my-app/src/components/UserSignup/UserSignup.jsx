import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import AlternateEmail from '@mui/icons-material/AlternateEmail';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import PasswordIcon from '@mui/icons-material/Password';


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  
  form: {
    width: '50%', 
    marginTop: theme.spacing(1),
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function UserSignup() {
  const classes = useStyles();

  const inputs = useSelector(store => store.signUpInputs);
  const error = useSelector(store => store.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    console.log(inputs)
  
    const userRequest = await fetch('http://localhost:3001/reg', {
      method: 'POST',
      credentials: 'include',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    const userFromBack = await userRequest.json();
    console.log(userFromBack.userId);
    if (userFromBack.userId) {
      dispatch({type: 'SET_USER', payload: userFromBack});
      dispatch({type: 'CLEAR_INPUTS', payload: {}})
      dispatch({type: 'SET_ERROR', payload: {}})
      navigate('/');
      } else {
        // alert('Регистрация не произошла. Пожалуйста, попробуйте снова.')
      dispatch({type: 'SET_ERROR', payload: userFromBack});
      
      }
      
    }
   
  return (
    <>
    {/* <div className='logoTitleReg'>
      <h1 className='iStyleReg'>i</h1>
      <h1 className='travelStyleReg'>Travel</h1>
    </div> */}

     <form className={classes.form} onSubmit={submitHandler}>
   
   
             
    <TextField 

     margin="normal"
      required
      fullWidth
      autoFocus
       
     id="outlined-basic1"
     label="E-mail"
     variant="outlined"
     type="email" 
     name="email"
     value={inputs.email ?? ''}
     onChange={(e) => dispatch({ type: 'USER_TYPING', payload: { [e.target.name]: e.target.value } })}/>

     <div  style={{ color: 'red' }}>
     <div>{error.error}</div>
     </div>
     
    <TextField 
      margin="normal"
      required
      fullWidth
      autoFocus
      
      id="outlined-basic2"
      label="Пароль"
      variant="outlined"
      type="password"
      name="password"
      value={inputs.password ?? ''}
      onChange={(e) => dispatch({ type: 'USER_TYPING', payload: { [e.target.name]: e.target.value } })}/>
         
    <TextField 
      margin="normal"
      required
      fullWidth
      autoFocus
      id="outlined-basic3" 
      label="Имя" 
      variant="outlined" 
      type="text" 
      name="name" 
      value={inputs.name || ''}
      onChange={(e) => dispatch({ type: 'USER_TYPING', payload: { [e.target.name]: e.target.value } })}/>    
           
    <Button
     fullWidth
     variant="contained"
     color="primary"
     type="submit">Submit</Button>      
  
        
    </form>
    </>
  )
}


