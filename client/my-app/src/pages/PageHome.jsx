import React from 'react';
import Button from '@mui/material/Button';
import style from '../pages/style.module.css';

export default function PageHome() {
  return (
    <form class={style.form}>
      <div class={style.text}>
        {/* <a style='background-image: url("https://static.tildacdn.com/tild6334-3231-4562-a334-663435616261/shutterstock_1869846.jpg")'></a> */}
        Выбери свой маршрут вместе с Travel      
      </div>
      <Button variant="outlined" type="submit">Выбрать маршрут</Button>
       {/* <div  style="height: 610px; background-attachment: scroll; transform: initial; background-image: url(&quot;https://thumb.tildacdn.com/tild6334-3231-4562-a334-663435616261/-/format/webp/shutterstock_1869846.jpg&quot;);"></div> */}

    </form>
  )
}

