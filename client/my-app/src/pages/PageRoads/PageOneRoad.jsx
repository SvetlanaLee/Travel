import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import App from '../../yandexMap/Map';
import Button from '@mui/material/Button';
import style from '../PageRoads/style.module.css';
import { YMaps, Map } from 'react-yandex-maps';
import Map1 from '../../yandexMap/Map';
import PlaceDiscription from '../../components/PlaceDiscription/PlaceDiscription';

export default function PageOneRoad() {
  const road = useSelector(store => store.road);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/roads/${id}`)
    .then((road) => {
    dispatch({type: 'GET_ONE_ROAD', payload: road.data.road})
    setLoading(false);  
  })    
  }, [dispatch, id]);

  useEffect(() => {
    axios.get('http://localhost:3001/places')
    .then((places) => {
      console.log(places.data.places);
     dispatch({type: 'GET_PLACES', payload: places.data.places})
  })  
}, [dispatch]);

  return (
      <>

    <div className='mapPlace'>
      <Map1 road={road}/>
    </div>
    <div>
    </div>

    <div>
      {loading ? (
        'loading...'
      ) : (
        <div className='roadDiscription'>
          <div className='discriptionTitle'>
            <h3 className='citys'>
              {road.from} - {road.destination}
            </h3>
              {road.createdAt}
          </div>
          <div className='discriptionText'> 
            {road.discription}
          </div>
        </div>
        
      )}
    </div>

   
    {/* <form class={style.mapCards}>
     <h1>Яндекс карты</h1>
          <div class={style.map}>
        <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
            
        </YMaps>
          </div>
        <Button variant="outlined" type="submit">Добавить метку</Button>
    </form> */}
    </>
  )
}
