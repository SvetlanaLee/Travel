import './App.css';
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import PageHome from './pages/PageHome';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001')
      .then((infoFromServer) => {
        console.log('----> Все вопросы из базы:', infoFromServer)
        if (infoFromServer.data.allInfoFromDB.length) {
          dispatch({ type: 'ALL_QUESTIONS', payload: infoFromServer.data.allInfoFromDB })
        }
      })
  }, [])

  return (
    <Routes>
      <Route index element={<PageHome />} />
    </Routes>
  );
}

export default App;
