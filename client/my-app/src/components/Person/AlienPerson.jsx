import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function AlienPerson() {
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

   <div className='alienBox'>
     <div className='alienInfo'>
     <div className='alienAvatar'>
     <Avatar
        alt={alienUser.name}
        src={`http://localhost:3001/${alienUser.photo}`}
        sx={{ width: 250, height: 250 }}
      />
     </div>

     <h3> { alienUser.name } </h3>
     <div >  <h5>Дата рождения: </h5>
          {
           alienUser.dateOfBirth
            ? 
            <p>{ dayjs(alienUser.dateOfBirth).format("DD-MM-YYYY") }</p>
            : 
            <i> not specified</i>
          }
     </div>
     <p> <h5>Город:</h5> { alienUser.city ?? <i>не указан</i>}</p>
     <p> <h5>Обо мне:</h5> { alienUser.aboutMe ?? <i>скоро здесь будет информация обо мне</i> }</p>
     <h5>Мои социальные сети</h5>
     <p> <TwitterIcon/> <a href="https://vk.com/" target="_blank" rel="noreferrer"> <i>Вконтакте</i></a></p>
     <p> <TelegramIcon/> <a href="https://web.telegram.org/z/" target="_blank" rel="noreferrer"> <i>Telegram</i></a></p>
     </div>
   </div>  

  )
}

  
       
       
    

