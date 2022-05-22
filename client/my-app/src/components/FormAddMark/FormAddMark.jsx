import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import { Button } from 'react-yandex-maps';

export default function FormAddMark() {

  const inputs = useSelector(store => store.inputs);
  // const place = useSelector(store => store.place);
  // const road = useSelector(store => store.road);
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    dispatch({type: 'INPUTS_TYPING', payload: {[event.target.name]: event.target.value}})
  }

  // const createNewMark = async (event) => {
  //   const data = {
  //     title: inputs.title,
  //     info: inputs.info,
  //     categoria: inputs.categoria,
  //     discription: inputs.discription,
  //     roadId: road.placeId
  //   };

  //   const response = await fetch('http://localhost:3001/roads', {
  //     method: 'POST',
  //     headers:{
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   });

  //   const place = await response.json();
  // if(place.error) {
  //   dispatch({type: 'SET_ERROR', payload: road});
  // } else {
  //   console.log(place.road.id);
  //   dispatch({type: 'INPUTS_CLEAR', payload: {}});
  //   dispatch({type: 'SET_ERROR', payload: {}});
  // }
  return (
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
      id="outlined-basic" 
      label="title" 
      variant="outlined" 
      name='title' 
      onChange={handleInputs} 
      value={inputs.title?? ''}
      required
    />
    <TextField 
      id="outlined-basic" 
      label="info" 
      variant="outlined" 
      name='info' 
      onChange={handleInputs} 
      value={inputs.info?? ''}
      required
    />
    <TextField 
      id="outlined-basic" 
      label="category" 
      variant="outlined" 
      name='categoria' 
      onChange={handleInputs} 
      value={inputs.categoria?? ''}
      required
    />
    <TextField 
      id="outlined-basic" 
      label="city" 
      variant="outlined" 
      name='adress' 
      onChange={handleInputs} 
      value={inputs.adress?? ''}
      required
    />
    <TextField 
      id="outlined-basic" 
      label="street" 
      variant="outlined" 
      name='adress' 
      onChange={handleInputs} 
      value={inputs.adress?? ''}
      required
    />
    {/* onClick={createNewMark} */}
    <Button variant="outlined" sx={{height: '40px'}}>Создать</Button>
  </Box>
  );
}
