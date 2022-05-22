import axios from 'axios';
import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg';

export default function Person() {
  const user = useSelector(store => store.user);
  
  const dispatch = useDispatch();
  const [img, setImg] = useState(null)
  // const [avatar, setAvatar] = useState(null)

  const sendFile = useCallback( async () => {
    try {
      const data = new FormData()
     
      data.append('avatar', img)
     
      await axios.post('http://localhost:3001/profile', data, {
        headers: {
          'content-type': 'multipart/form-data',
          
        },
        withCredentials: true,
      })
      .then(res => {
        console.log(res)
      
        dispatch({type: 'SET_USER', payload: res.data})})
      //  console.log('avatar========',avatar)
      
    } catch (error) {
      
    }

  }, [img, dispatch ])
     

  // useEffect( () => {
  //    axios.get('http://localhost:3001/profile')
  //   .then((avatarFromServer) => {
  //     console.log(avatarFromServer)
  //   dispatch({type: 'SET_USER', payload: avatarFromServer.data})
    
  // })
    
  // }, [dispatch]);


  return (
    
    <div  style={{ color: 'black' }}>
        <div>Привет, {user.userName}!</div>

        {/* <div>avatar ==========={user.userPhoto}</div> */}

        {/* <p><img src={`http://localhost:3001/${ user.userPhoto }`} width="450" height="450" alt=""/></p> */}

      
        
        <div className='avatar'>
          {
            user.userPhoto
            ? 
            <p><img src={`http://localhost:3001/${ user.userPhoto }`} width="450" height="450" alt=""/></p>
            // :  <div>privet</div>
            : <p><img src={`${logo}`} width="450" height="450" alt='avatar'/></p> 
        
          }
             

        </div>

        <input type="file" onChange={e => setImg(e.target.files[0])} />
        <button className='btn' onClick={sendFile}>Изменить аватар</button>


        </div>

  
       
       
    
  )
}
