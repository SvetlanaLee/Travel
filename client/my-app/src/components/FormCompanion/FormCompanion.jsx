import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function FormCompanion() {
  const inputs = useSelector(store => store.inputs);
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createAdvt = async () => {
  
    const data = {
      cityFrom: inputs.cityFrom,
      cityWhere: inputs.cityWhere,
      info: inputs.info,
      start: inputs.start,
      end: inputs.end,
      userId: user.userId
    };
    const response = await fetch('http://localhost:3001/companions', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const res = await response.json();
    
    if(res.error) {
      dispatch({type: 'SET_ERROR', payload: res});
    } else {
      dispatch({ type: 'INPUTS_CLEAR', payload: {}});
      dispatch({type: 'SET_ERROR', payload: {}});
      dispatch({ type: 'GET_COMPANIONS', payload: res.allComps});
      navigate('/companions');
    }
  }

  return (
    <div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
    <TextField 
      focused
      style={{marginTop: '20px'}}
      id="outlined-basic" 
      label="Откуда" 
      variant="outlined" 
      name='cityFrom' 
      value={inputs.cityFrom?? ''}
      required
      onChange={(e) => dispatch
        ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
    />
    <TextField 
      focused
      id="outlined-basic" 
      label="Куда" 
      variant="outlined" 
      name='cityWhere' 
      value={inputs.cityWhere?? ''}
      required
      onChange={(e) => dispatch
        ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
    />
    <TextField 
      focused
      id="outlined-basic" 
      label="Описание" 
      variant="outlined" 
      name='info' 
      value={inputs.info?? ''}
      required
      onChange={(e) => dispatch
        ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
    />
    <TextField
      label="Дата отправления"
      focused
      id="outlined-basic1"
      // margin="normal"
      required
      fullWidth
      // label="Дата отправления"
      // variant="outlined"
      type="date"
      name="start"
      value={inputs.start ?? ''}
      onChange={(e) => dispatch
        ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
    />
    <TextField
      focused
      // margin="normal"
      required
      // fullWidth
      // autoFocus
      id="outlined-basic1"
      label="Дата возвращения"
      // variant="outlined"
      type="date"
      name="end"
      value={ inputs.end ?? '' }
      onChange={(e) => dispatch
        ({ type: 'INPUTS_TYPING', payload: { [e.target.name]: e.target.value } })}
    />

    <Button variant="contained" sx={{height: '40px'}} onClick={createAdvt}>Добавить</Button>
  </Box>
    </div>
  )
}
