import React from 'react';
import Button from '@mui/material/Button';
import style from '../pages/PageRoads/style.module.css';
import { useNavigate } from 'react-router-dom';

export default function PageHome() {
  
  const navigate = useNavigate();
  const onPageRoads = () => {
    navigate('/roads')
  };

  return (
    <form className={style.form}>
      <div className={style.text}>
         Выбери свой маршрут вместе с Travel      
      </div>
        <Button variant="outlined" type="submit" onClick={onPageRoads}>Выбрать маршрут</Button>
    </form>
  )
}

