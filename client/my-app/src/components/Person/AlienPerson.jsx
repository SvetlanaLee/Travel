import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";


const useStyles = styled(theme => ({
  root: {
    height: '100vh',
  },
  form: {
    width: '20%', 
    marginTop: theme.spacing(1),
    // position: 'absolute', 
    // left: '10%', 
    // top: '10%',
    // transform: 'translate(-10%, -10%)'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AlienPerson() {
  const classes = useStyles();
  const alienUser = useSelector(store => store.alienUser);
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log('comment.User.id=================', comment.User.id)

  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
    .then((data) => {
      // console.log(data.data.user)
     dispatch({type: 'GET_USER', payload: data.data.user})
  
  })
    
  }, [id, dispatch]);
   
  return (
   
        
   <div>
     
     <p>Name: { alienUser.name } </p>

     <div className='avatar'>
          {
           alienUser.photo
            ? 
            <p><img src={`http://localhost:3001${ alienUser.photo }`} width="300" height="300" alt=""/></p>
            : 
            <p><img src={`${logo}`} width="300" height="300" alt='avatar'/></p> 
          }
           
        </div>

    
     <p>About me: { alienUser.aboutMe ?? <i>not specified</i> }</p>
     <p>City: { alienUser.city ?? <i>not specified</i>}</p>
     <p>VK: { alienUser.vk ?? <i>not specified</i>}</p>
     <p>Telegram: { alienUser.telegram ?? <i>not specified</i>}</p>


     <div> Date of Birth:  
          {
           alienUser.dateOfBirth
            ? 
            <p>{ dayjs(alienUser.dateOfBirth).format("DD-MM-YYYY") }</p>
            : 
            <i> not specified</i>
          }
           
        </div>
      
   </div>

  )
}

  
       
       
    

