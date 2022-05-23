import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import PageHome from "./pages/PageHome";
import './App.css';
import ReactDOM from 'react-dom';
import PageRegistration from "./pages/PageRegistration"
import PageLogin from "./pages/PageLogin"
import PageRoads from "./pages/PageRoads/PageRoads";
import PageOneRoad from './pages/PageRoads/PageOneRoad';
import Person from './components/Person/Person';
import AlienPerson from './components/Person/AlienPerson';
import PagePutMark from './pages/PagePutMark/PagePutMark';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/session', {
      credentials: 'include'
    }).then(data => data.json())
      .then(user => dispatch({ type: 'SET_USER', payload: user}))
  }, [dispatch]);
  
  return (
  <>
    <div className="App">
        <Navigation/>
        <Routes>
          <Route path="/" element={<PageHome/>} />
          <Route path="/roads" element={<PageRoads />} />
          <Route path='/reg' element={<PageRegistration/>}/>
          <Route path='/login' element={<PageLogin/>}/>
          <Route path='/roads/:id' element={<PageOneRoad/>}/>
          <Route path='/profile' element={<Person/>}/>
          <Route path="/users/:id" element={<AlienPerson/>} />
          {/* <Route path='/mymark' element={ <PagePutMark/> }/>           */}
        </Routes>
        
    </div>
  </>
  );
}

export default App;

