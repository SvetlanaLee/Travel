import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

export default function FormAddMark() {

  const inputs = useSelector(store => store.inputs);
  const show = useSelector(store => store.showNewPlace);
  const road = useSelector(store => store.road);
  const error = useSelector(store => store.error);
  const dispatch = useDispatch();

  const handleInputs = (event) => {
    dispatch({type: 'INPUTS_TYPING', payload: {[event.target.name]: event.target.value}})
  }

  const categorias = [
    {
      value: 'еда',
      label: 'кафе, рестораны',
    },
    {
      value: 'гостиница',
      label: 'отели, гостиницы, кэмпинг',
    },
    {
      value: 'аптека',
      label: 'аптеки',
    },
    {
      value: 'заправки',
      label: 'заправки',
    },
    {
      value: 'отдых',
      label: 'красивые места, музеи',
    },
    {
      value: 'магазин',
      label: 'магазины',
    }
  ];

  const createNewMark = async()=> {
  
    const adressRes = (adress) => {
      const lowerCase = adress.toLowerCase();
      const result = lowerCase.replace(/([а-яa-z])/, (match, p1) => p1.toUpperCase());
      const result2 = result.replace(/ ([а-яa-z])/g, (match, p1) => ` ${p1.toUpperCase()}`);
      const result3 = result2.replace(/( ?)-( ?)([а-яa-z])/g, (match, p1, p2, p3) => `-${p3.toUpperCase()}`).replace(/( ?)-( ?)/g, '-');
      return result3;
    };

    const data = {
      title: inputs.title,
      info: inputs.info,
      categoria: inputs.categoria,
      city: adressRes(inputs.city),
      street: adressRes(inputs.street),
      dom: inputs.dom,
      roadId: road.id,
    };

    const response = await fetch('http://localhost:3001/places', {
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
      dispatch({type: 'INPUTS_CLEAR', payload: {}});
      dispatch({type: 'GET_PLACES', payload: res.places});
      dispatch({type: 'SET_ERROR', payload: {}});
      dispatch({ type: 'CHANGE_SHOW', payload: !show });
    }
  }

  return (
    <>
    <div>{error.error}</div>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{ display: 'flex', flexDirection: 'row', marginBottom: '-60px' }}
      // , alignItems: 'center'
      // , marginRight: '170px'
    >
    <TextField 
      style={{width: '160px'}}
      id="outlined-basic" 
      label="title" 
      variant="outlined" 
      name='title' 
      onChange={handleInputs} 
      value={inputs.title?? ''}
      required
    />
    <TextField 
      style={{width: '160px'}}
      id="outlined-basic" 
      label="info" 
      variant="outlined" 
      name='info' 
      onChange={handleInputs} 
      value={inputs.info?? ''}
      required
    />
    <TextField
          // style={{ padding: '8,5px 14px' }}
          sx={{  padding: '8,5px 14px'}}
          id="outlined-select-currency"
          select
          label="Kатегория"
          name='categoria' 
          value={inputs.categoria?? ''}
          onChange={handleInputs}
          // helperText="Выберите категорию"
        >
          {categorias.map((option) => (
            <MenuItem key={option.value} value={option.value} style={{width: '150px'}}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    <TextField 
    style={{width: '160px'}}
      id="outlined-basic" 
      label="city" 
      variant="outlined" 
      name='city' 
      onChange={handleInputs} 
      value={inputs.city?? ''}
      required
    />
    <TextField 
    style={{width: '160px'}}
      id="outlined-basic" 
      label="street" 
      variant="outlined" 
      name='street' 
      onChange={handleInputs} 
      value={inputs.street?? ''}
      required
    />
    <TextField 
    style={{width: '160px'}}
      id="outlined-basic" 
      label="dom" 
      variant="outlined" 
      name='dom' 
      onChange={handleInputs} 
      value={inputs.dom?? ''}
      required
    />
    {/* onClick={createNewMark} */}
    <Button className='myMarkBtn' variant="outlined" sx={{height: '56px', marginTop: '8px', width: '135px' }} onClick={createNewMark}>Создать</Button>
  </Box>
  </>
  );
}
