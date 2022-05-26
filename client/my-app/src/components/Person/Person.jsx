import axios from 'axios';
import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Person.css';
import FormCompanion from '../FormCompanion/FormCompanion';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import dayjs from 'dayjs';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const Input = styled('input')({
  display: 'none',
});

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  form: {
    // width: '50%',
    marginTop: theme.spacing(1),
    width: '25ch'
    // height: '10vh',
    // position: 'absolute', 
    // left: '10%', 
    // top: '10%',
    // transform: 'translate(-10%, -10%)'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function Person() {
  const classes = useStyles();
  const user = useSelector(store => store.user);
  const inputs = useSelector(store => store.inputs);
  const error = useSelector(store => store.error);
  // const [show, setShow] = useState(false);

  // const showForm = () => {
  //   setShow(!show)
  // };

  const dispatch = useDispatch();
  const [img, setImg] = useState(null)
  // const [avatar, setAvatar] = useState(null)
  const sendFile = useCallback(async () => {
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
          dispatch({ type: 'SET_USER', payload: res.data })
        })
    } catch (error) {
    }
  }, [img, dispatch])


  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log('user=================', user)
    const data = {
      name: inputs.name,
      aboutMe: inputs.about,
      city: inputs.city,
      dateOfBirth: inputs.birth,
      vk: inputs.vk,
      telegram: inputs.telegram

    }
    // console.log('newComment====', newComment)
    const addData = await fetch(`http://localhost:3001/person`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    //console.log(newComment)
    const dataFromBack = await addData.json();
    //console.log('commentFromBack', commentFromBack);
    if (dataFromBack) {
      dispatch({ type: 'SET_USER', payload: dataFromBack });
      // dispatch({type: 'ADD_COMMENTS', payload: commentFromBack});
      dispatch({ type: 'INPUTS_CLEAR', payload: {} })
    } else {
      dispatch({ type: 'SET_ERROR', payload: dataFromBack });
    }
  }

  return (

    <div className='person'>
      <div className='left'>
        {/* <div  style={{ color: 'black' }}>
  <i>Hello, cool traveler {user.userName}!</i>
  </div> */}

        <div className='avatar'>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp" src={`http://localhost:3001${user.userPhoto}`}
              sx={{ width: 250, height: 250 }} />

          </Stack>
        </div>

        {/* <div className='avatar'>
  {
    user.userPhoto
    ? 
    <p><img src={`http://localhost:3001${ user.userPhoto }`} width="100" height="100" alt=""/></p>
    : 
    <p><img src={`${logo}`} width="450" height="450" alt='avatar'/></p> 
  }
    
  </div> */}

        <div className='upload'>
          <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
            </label>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" onChange={e => setImg(e.target.files[0])} />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
            <Button variant="contained" component="span" onClick={sendFile}>Изменить аватар</Button>
          </Stack>
        </div>

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
        {/* <div className='form'> */}
          {/* <form className={classes.form} onSubmit={submitHandler}> */}

            <TextField
                focused
                style={{marginTop: '20px'}}
                margin="normal"
                id="outlined-basic" 
                label="Имя"
                variant="outlined" 
                name="name"
                value={inputs.name ?? user.userName ?? ''}
                required
                onChange={(e) => dispatch
                  ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
                  />
              
              <TextField
              focused
               margin="normal"
               id="outlined-basic" 
               label="Обо мне"
              variant="outlined"
               name="about"
              value={inputs.about ?? user.userAboutMe ?? ''}
              required
              onChange={(e) => dispatch
                ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })} 
                />

            <TextField
            focused
              margin="normal"
              id="outlined-basic" 
              label="Город проживания"
              variant="outlined"
              name="city"
              value={inputs.city ?? user.userCity ?? ''}
              required
              onChange={(e) => dispatch
                ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })} />

            <TextField
              focused
              margin="normal"
              id="outlined-basic" 
              label="VK"
              variant="outlined"
              name="vk"
              value={inputs.vk ?? user.userVK ?? ''}
              required
              onChange={(e) => dispatch
                ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })} />

            <TextField
              focused     
              margin="normal"
              id="outlined-basic" 
              label="Telegram"
              variant="outlined"
              autoFocus
              name="telegram"
              value={inputs.telegram ?? user.userTelegram ?? ''}
              required
              onChange={(e) => dispatch
                ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })} />

            <TextField
              focused
              margin="normal"
              required
              fullWidth
              autoFocus
              id="outlined-basic1"
              label="Дата рождения"
              variant="outlined"
              type="date"
              name="birth"
              // value={inputs.birth ?? user.userDateOfBirth}
              value={dayjs(inputs.birth ?? user.userDateOfBirth).format("YYYY-MM-DD") ?? ''}
              onChange={(e) => dispatch
                ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })} />

           
              
<Button variant="contained" sx={{height: '40px', width: '50ch'}} onClick={submitHandler}>ПОДТВЕРДИТЬ</Button>
             
              
        {/* </div> */}

        </Box>
      </div>


      <div className='comp'>
        <div className='searchComp'>
          Искать попутчиков
          {/* <Button 
          // onClick={showForm}
            fullWidth
            variant="contained"
            color="primary"
            type="submit">ИСКАТЬ ПОПУТЧИКОВ</Button> */}
        </div>

          <div>
            <div>{error.error}</div>
             <FormCompanion />
          </div>
     </div>
    </div>

  )
}


     
      
     
     
      
        
  
             
              
                       
             
             





















