import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

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


export default function UserSignin() {
  const classes = useStyles();

  const inputs = useSelector(store => store.logInInputs);
  const errorLogin = useSelector(store => store.errorLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    // console.log(inputs)
  
    const userRequest = await fetch('http://localhost:3001/login', {
      method: 'POST',
      credentials: 'include',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inputs)
    });

    const userFromBack = await userRequest.json();
    console.log('login================', userFromBack);
    if (userFromBack.userId) {
    dispatch({type: 'SET_USER', payload: userFromBack});
    dispatch({type: 'CLEAR_INPUTS', payload: {}});
    dispatch({type: 'SET_ERROR', payload: {}});
    dispatch({type: 'SET_ERROR_LOGIN', payload: {}});
       
    navigate('/');
    } else {
      //alert('Неправильные данные для входа. Пожалуйста, попробуйте снова.')
     // navigate('/login');
     dispatch({type: 'SET_ERROR_LOGIN', payload: userFromBack});
     
    }
    
  }

  return (
    <>
   
        
     <form className={classes.form} onSubmit={submitHandler}>
     <div  style={{ color: 'red' }}>
     <div>{errorLogin.error}</div>
     </div>
             
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
    
    <TextField 
      margin="normal"
      required
      fullWidth
      autoFocus
      
      id="outlined-basic2"
      label="Password"
      variant="outlined"
      type="password"
      name="password"
      value={inputs.password ?? ''}
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


