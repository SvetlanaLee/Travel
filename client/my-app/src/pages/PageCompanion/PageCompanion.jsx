import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompanionCard from '../../components/CompanionCard/CompanionCard';
import Typography from '@mui/material/Typography';

export default function PageCompanion() {

  const allComps = useSelector(store => store.companion);
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3001/companions')
      .then(data => data.json())
        .then(comps => {
          dispatch({ type: 'GET_COMPANIONS', payload: comps.allComps});
          setLoading(false);  
    })
  }, [dispatch]);

  return (
    <>
    <header className='headerComPage'>
      <Typography variant="h5">
       Как только я увидел тебя, я понял, что должно произойти грандиозное приключение.
      </Typography>
    </header>
    <div className='cardCompBox'>
      {loading ? (
        'Loading...') :
        ( allComps.map((comp) => <CompanionCard comp={ comp } key={comp.id}/> ) )
      }
    </div>
    </>
  )
}
