import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Button from '@mui/material/Button';
import style from '../PageRoads/style.module.css';
import { YMaps, Map } from 'react-yandex-maps';

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

  return (
      <>
    <div>
      {loading ? (
        'loading...'
      ) : (
        <div>
          {road.from} - {road.destination}
        </div>
      )}
    </div>

    {/* <form class={style.mapCards}>
     <h1>Яндекс карты</h1>
          <div class={style.map}>
        <YMaps>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} /> */}
            {/* <Map referencePoints:[55.734876, 37.59308], /> */}
        {/* </YMaps>
          </div>
        <Button variant="outlined" type="submit">Добавить метку</Button>
    </form> */}
    </>
  )
}
