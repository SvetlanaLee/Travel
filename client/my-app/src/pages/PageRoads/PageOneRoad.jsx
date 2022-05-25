import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import axios from 'axios';
import Map1 from '../../components/yandexMap/Map';
import Button from '@mui/material/Button';
import FormForComment from '../../components/FormForComment/FormForComment';
import ListOfComments from '../../components/ListOfComments/ListOfComments';
import FormAddMark from '../../components/FormAddMark/FormAddMark';


export default function PageOneRoad() {
  const road = useSelector(store => store.road);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  // const [show, setShow] = useState(false)
  const show = useSelector(store => store.showNewPlace);
  const showPlace = () => {
    dispatch({ type: 'CHANGE_SHOW', payload: !show })
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/roads/${id}`)
    .then((road) => {
    dispatch({type: 'GET_ONE_ROAD', payload: road.data.road})
    setLoading(false);  
  })    
  }, [dispatch, id]);

  useEffect(() => {
    axios.get(`http://localhost:3001/places/${id}`)
    .then((places) => {
      // console.log(places.data.places);
     dispatch({type: 'GET_PLACES', payload: places.data.places})
  })  
}, [dispatch, id]);

  return (
    <div className='pageOneRoadStyle'>

      <div className='mapPlace'>
        <div>
          {loading ? (
            'loading...'
          ) : (
            <div className='roadDiscription'>
              <div className='discriptionTitle'>
                <h3 className='citys'>
                  {road.from} - {road.destination}
                </h3>
                  {/* {road.createdAt} */}
              </div>              
            </div>          
          )}
        </div>
        <div className='mapRoadDiscription'>
            <Map1 road={road}/>
          <div className='comments'>
            <FormForComment />
            <ListOfComments />
          </div>
        </div>
          <div className='mapPlaceBtn'>
            <Button variant="outlined" style={{ marginBottom: '10px' }} onClick={(e) => showPlace()}>Своя метка</Button> 
            {show && <FormAddMark show={show}/>}
          </div>
          <div className='discriptionText'> 
            {road.discription}
          </div>
      </div>
        <div>
          {/* {loading ? (
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
          )} */}
          {/* <div className='comments'>
            <FormForComment />
            <ListOfComments />
          </div> */}
        </div>
    </div>
  )
}

  



