import axios from 'axios';
import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import logo from './logo.svg';
import FormCompanion from '../FormCompanion/FormCompanion' ;
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import dayjs from 'dayjs';



const useStyles = makeStyles(theme => ({
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


export default function Person() {
  const classes = useStyles();
  const user = useSelector(store => store.user);

  const inputs = useSelector(store => store.inputs);

  const error = useSelector(store => store.error);
  const [ show, setShow ] = useState(false);

  const showForm = () => {
    setShow(!show)
  };
  
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
     } catch (error) {
      }
   }, [img, dispatch ])
     

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log('user=================', user)
    const data = { 
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
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    //console.log(newComment)
    const dataFromBack = await addData.json();
    //console.log('commentFromBack', commentFromBack);
    if (dataFromBack) {
      dispatch({type: 'SET_USER', payload: dataFromBack});
      // dispatch({type: 'ADD_COMMENTS', payload: commentFromBack});
      dispatch({type: 'INPUTS_CLEAR', payload: {}})
    } else {
      dispatch({type: 'SET_ERROR', payload: dataFromBack});
      }
    }


  return (
    
    <div  style={{ color: 'black' }}>
        <div>Привет, {user.userName}!</div>
        {/* <div>avatar ==========={user.userPhoto}</div> */}
        {/* <p><img src={`http://localhost:3001/${ user.userPhoto }`} width="450" height="450" alt=""/></p> */}
             
        <div className='avatar'>
          {
            user.userPhoto
            ? 
            <p><img src={`http://localhost:3001${ user.userPhoto }`} width="100" height="100" alt=""/></p>
            // :  <div>privet</div>
            : <p><img src={`${logo}`} width="450" height="450" alt='avatar'/></p> 
          }
           
        </div>
        <input type="file" onChange={e => setImg(e.target.files[0])} />
        <button className='btn' onClick={sendFile}>Изменить аватар</button>
        <>
   
      <form className={classes.form} onSubmit={submitHandler}>
 
     <TextField 


    margin="normal"
    required
    fullWidth
    autoFocus
     id="outlined-basic1"
   label="About me"
   variant="outlined"
   type="text" 
   name="about"
   value={inputs.about ?? user.userAboutMe ?? ''}
   onChange={(e) => dispatch
   ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}/>
<TextField 

 margin="normal"
 required
 fullWidth
 autoFocus
id="outlined-basic1"
label="City"
variant="outlined"
type="text" 
name="city"
value={inputs.city ?? user.userCity ?? ''}
onChange={(e) => dispatch
({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}/>

<TextField 

 margin="normal"
 required
 fullWidth
 autoFocus
id="outlined-basic1"
label="VK"
variant="outlined"
type="text" 
name="vk"
value={inputs.vk ?? user.userVK ?? ''}
onChange={(e) => dispatch
({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}/>


<TextField 

 margin="normal"
 required
 fullWidth
 autoFocus
id="outlined-basic1"
label="Telegram"
variant="outlined"
type="text" 
name="telegram"
value={inputs.telegram ?? user.userTelegram ?? ''}
onChange={(e) => dispatch
({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}/>


<TextField 

margin="normal"
 required
 fullWidth
 autoFocus
id="outlined-basic1"
label="Date of Birth"
variant="outlined"
type="date" 
name="birth"
// value={inputs.birth ?? user.userDateOfBirth}
value={dayjs(inputs.birth ?? user.userDateOfBirth).format("YYYY-MM-DD") ?? ''}
onChange={(e) => dispatch
({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}/>

        <div>
          <button onClick={showForm}>Искать попутчиков</button>
          <div>
            <div>{error.error}</div>
            {show && <FormCompanion/>}
          </div>
        </div>


   <Button
   fullWidth
   variant="contained"
   color="primary"
   type="submit">Submit</Button>  
  </form>
  
</>
</div>
  )
}

    

