import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CompanionCard from '../../components/CompanionCard/CompanionCard';


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
    <>
    <div className='headerComPage'>
      <h2 className='textCompP'>
      <i>Как только я увидел тебя, я понял, что должно произойти грандиозное приключение...</i>
      </h2>
    </div>
    </>
    <>
    <div className='cardCompBox'>
      {loading ? (
        'Loading...') :
        ( allComps.map((comp) => <CompanionCard comp={ comp } key={comp.id}/> ) )
      }
    </div>
    </>
    </>
  )
}
