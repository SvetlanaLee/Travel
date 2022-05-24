import React, { useState } from 'react'
import Roads from '../../components/Roads/Roads'
import {Box, TextField, Button} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppBar, Container, Grid, Paper, Typography } from '@material-ui/core';



export default function PageRoads() {

  const [show, setShow] = useState(false)

  const handlerShow = () => {
    setShow(!show);
  }

  const inputs = useSelector(store => store.inputs);
  const user = useSelector(store => store.user);
  const error = useSelector(store => store.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputs = (event) => {
    dispatch({type: 'INPUTS_TYPING', payload: {[event.target.name]: event.target.value}})
  }

  const createNewRoad = async (event) => {
      const data = {
        distance: inputs.distance,
        from: inputs.from,
        destination: inputs.destination,
        discription: inputs.discription,
        userId: user.userId
      };

      const response = await fetch('http://localhost:3001/roads', {
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const road = await response.json();

      if(road.error) {
        dispatch({type: 'SET_ERROR', payload: road});
      } else {
        console.log(road.road.id);
        dispatch({type: 'INPUTS_CLEAR', payload: {}});
        dispatch({type: 'SET_ERROR', payload: {}});
        navigate(`/roads/${road.road.id}`);
      }
  }

  return (
    // <>
    // <main>
    //   <Paper className='mainFeauturePost'>
    //    style={{ backgroundImage: `url(http://source.unsplash.com/random)` }}
    //    <Container maxWidth='sm'>
    //      <Grid container>
    //        <Grid item md={ 6 }>
    //          <div className='mainFeauturePostContent'>
    //            <Typography
    //              component='h1'
    //              color='inherit'
    //              gutterBottom
    //            >
    //              Some Text
    //            </Typography>
    //            <Typography
    //              component='h5'
    //              color='inherit'
    //              paragraph
    //            >
    //              Тут будет написан какой-нибудь пафосный слог
    //            </Typography>
    //          </div>
    //        </Grid>
    //      </Grid>
    //    </Container>
    //   </Paper>
    // </main>
    // </>
    <>
    {/* <PageRoadsBGI/> */}
    <div className='prImg'>
      {/* <div className='slog'> */}
        <div className='logoTitle'>
          <h1 className='iStyle'>i</h1>
          <h1 className='travelStyle'>Travel</h1>      
        </div>
        <div className='logoText'>
          <h1>Путешествовать — значит жить</h1>
        </div>
      {/* </div> */}
    </div>
    <div className='sdfsd'>        
          <div className='myRoadBtn'>
          <Button variant="outlined" type='submit' onClick={ handlerShow }
        >Свой маршрут</Button>
          </div>
          {show && 
          <div>
            <div  style={{ color: 'red', marginBottom: '20px', textAlign: 'center' }}>
              <div>{error.error}</div>
            </div>
            <Box
              component="form"
              sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
              style={{ display: 'flex', justifyContent: 'center' }}
              >
              <TextField 
              id="outlined-basic" 
              label="Город отправления" 
              variant="outlined" 
              name='from' 
              onChange={handleInputs} 
              value={inputs.from?? ''}
              required
              />
              <TextField 
              id="outlined-basic" 
              label="Город прибытия" 
              variant="outlined" 
              name='destination' 
              onChange={handleInputs} 
              value={inputs.destination?? ''}
              required
              />
              <TextField 
              id="outlined-basic" 
              label="Описание" 
              variant="outlined" 
              name='discription' 
              onChange={handleInputs} 
              value={inputs.discription?? ''}
              required
              />
              <TextField 
              id="outlined-basic" 
              label="Расстояние (км)" 
              variant="outlined" 
              name='distance' 
              onChange={handleInputs} 
              value={inputs.distance?? ''}
              required
              />
              <Button variant="outlined" sx={{height: '40px'}} onClick={createNewRoad}>Создать</Button>
            </Box> 
          </div>}
          <Roads />
    </div>
    </>
  )
}
