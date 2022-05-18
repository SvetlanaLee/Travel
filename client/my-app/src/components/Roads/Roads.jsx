import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Road from '../Road/Road'

export default function Roads() {
  const roads = useSelector(store => store.roads);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/roads')
    .then((roadsFromServer) => {
    dispatch({type: 'GET_ROADS', payload: roadsFromServer.data.roads})
    setLoading(false);  
  })
    
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        'Loading...') :
        ( roads.map((road) => <Road road={ road } key={road.id}/> ) )
      }
    </div>
  )
}
