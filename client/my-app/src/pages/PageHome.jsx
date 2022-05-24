import React from 'react';
import Button from '@mui/material/Button';
import style from '../pages/PageRoads/style.module.css';
import { useNavigate } from 'react-router-dom';
import BCarousel from '../components/BCarousel';

export default function PageHome() {
  
  const navigate = useNavigate();
  const onPageRoads = () => {
    navigate('/roads')
  };

  return (
    <>
   
    <BCarousel />

    {/* <div className={style.home}>
    <form className={style.form}>
      <div className={style.text}>
         Выбери свой маршрут вместе с <span className={style.colorText}>i</span>Travel      
      </div>
      <div className={style.buthome}>
        <Button onClick={onPageRoads}>Выбрать маршрут</Button>
      </div>
    </form>

    </div> */}
    </>
  )
}

