import React, { useState } from 'react'
import Roads from '../../components/Roads/Roads'
import {Box, TextField, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';


export default function PageRoads() {

  const [show, setShow] = useState(false)

  const handlerShow = () => {
    setShow(!show);
  }

  const inputs = useSelector(store => store.inputs);
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    dispatch({type: 'INPUTS_TYPING', payload: {[event.target.name]: event.target.value}})
  }

  return (
    <>
      
      <Button variant="outlined" type='submit' onClick={ handlerShow }
       style={{ margin: '67px 837px 28px', width: '175px' }}>Свой маршрут</Button>
      {show && 
      <div>
        <Box style={{ display: 'flex', justifyContent: 'center' }}
          component="form"
          sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          >
          <TextField 
          id="outlined-basic" 
          label="Откуда" 
          variant="outlined" 
          name='from' 
          onChange={handleInputs} 
          value={inputs.from?? ''}
          />
          <TextField 
          id="outlined-basic" 
          label="Куда" 
          variant="outlined" 
          name='destination' 
          onChange={handleInputs} 
          value={inputs.destination?? ''}
          />
          <TextField 
          id="outlined-basic" 
          label="Описание" 
          variant="outlined" 
          name='discription' 
          onChange={handleInputs} 
          value={inputs.discription?? ''}
          />
          <TextField 
          id="outlined-basic" 
          label="Расстояние" 
          variant="outlined" 
          name='distance' 
          onChange={handleInputs} 
          value={inputs.distance?? ''}
          />
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">На чем</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name='transportType' 
            label="transportType"
            onChange={handleInputs}
          >
            <MenuItem value={'авто'}>авто</MenuItem>
            <MenuItem value={'велосипед'}>велосипед</MenuItem>
          </Select>
          </FormControl>
          <Button variant="text" sx={{height: '55px'}}>Зарегистрироваться</Button>
</Box> 
      </div>}
      <Roads />
    </>
  )
}
