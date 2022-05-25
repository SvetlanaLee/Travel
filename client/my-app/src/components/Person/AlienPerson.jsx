import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Icon28LogoVkColor } from '@vkontakte/icons';
import './AlienPerson.css';


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
     <div className='alienBirth'>  Дата рождения:  
          {
           alienUser.dateOfBirth
            ? 
            <p>{ dayjs(alienUser.dateOfBirth).format("DD-MM-YYYY") }</p>
            : 
            <i> not specified</i>
          }
     </div>
     <p>Город: { alienUser.city ?? <i>not specified</i>}</p>
     <p>Обо мне: { alienUser.aboutMe ?? <i>not specified</i> }</p>
     <h5>Мои социальные сети</h5>

     <div className='alienVk'>
     
     <Icon28LogoVkColor width={25} height={25}/>: { alienUser.vk ?? <i>not specified</i>}
     </div>
     
    
 

     <p>Telegram: { alienUser.telegram ?? <i>not specified</i>}</p>
     </div>
   </div>  

  )
}

  
       
       
    

