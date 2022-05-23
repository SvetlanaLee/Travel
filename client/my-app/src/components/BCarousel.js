import React from 'react';
import { Carousel } from'react-bootstrap';
import Button from '@mui/material/Button';
import style from '../pages/PageRoads/style.module.css';
import { useNavigate } from 'react-router-dom';



export default function BCarousel() {

  const navigate = useNavigate();
  const onPageRoads = () => {
    navigate('/roads')
  };

  return (
//
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
    <div >
    <form >
      <div className={style.text}>
         Выбери свой маршрут вместе с <span className={style.colorText}>i</span>Travel      
      </div>
      <div className={style.buthome}>
        <Button onClick={onPageRoads}>Выбрать маршрут</Button>
      </div>
    </form>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Second slide"
    />

    <Carousel.Caption>
    <div  >
    <form className='main'>
      <div className={style.text}>
         Выбери свой маршрут вместе с <span className={style.colorText}>i</span>Travel      
      </div>
      <div className={style.buthome}>
        <Button onClick={onPageRoads}>Выбрать маршрут</Button>
      </div>
    </form>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="Third slide"
    />

    <Carousel.Caption>
    <div >
    <form >
      <div className={style.text}>
         Выбери свой маршрут вместе с <span className={style.colorText}>i</span>Travel      
      </div>
      <div className={style.buthome}>
        <Button onClick={onPageRoads}>Выбрать маршрут</Button>
      </div>
    </form>
    </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

