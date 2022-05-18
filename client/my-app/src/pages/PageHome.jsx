import React from 'react';
import Button from '@mui/material/Button';
import style from '../pages/style.module.css';
import { useNavigate } from 'react-router-dom';

export default function PageHome() {
  
  const navigate = useNavigate();
  const onPageRoads = () => {
    navigate('/roads')
  };

  return (
    <form className={style.form}>
      <div className={style.text}>
        {/* <a style='background-image: url("https://static.tildacdn.com/tild6334-3231-4562-a334-663435616261/shutterstock_1869846.jpg")'></a> */}
        Выбери свой маршрут вместе с Travel      
      </div>
      <Button variant="outlined" type="submit" onClick={onPageRoads}>Выбрать маршрут</Button>
       {/* <div  style="height: 610px; background-attachment: scroll; transform: initial; background-image: url(&quot;https://thumb.tildacdn.com/tild6334-3231-4562-a334-663435616261/-/format/webp/shutterstock_1869846.jpg&quot;);"></div> */}

    </form>
  )
}

