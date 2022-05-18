import React from 'react';
import Button from '@mui/material/Button';
import style from '../pages/style.module.css';
import { YMaps, Map } from 'react-yandex-maps';


export default function PageOneRoad() {
  return (
    <form class={style.mapCards}>
     <h1>Яндекс карты</h1>
        <YMaps>
          <div class={style.map}>
            <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
          </div>
        </YMaps>
    </form>
  )
}


