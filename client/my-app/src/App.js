import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import PageHome from "./pages/PageHome";
import './App.css';
import PageRegistration from "./pages/PageRegistration"
import PageLogin from "./pages/PageLogin"
import PageRoads from "./pages/PageRoads/PageRoads";
import PageOneRoad from './pages/PageRoads/PageOneRoad';
import Person from './components/Person/Person';
import PageCompanion from './pages/PageCompanion/PageCompanion';

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
          <Route path='/upload' element={<Person/>}/>
          <Route path='/companions' element={<PageCompanion/>}/>
        </Routes>
        
    </div>
  </>
  );
}

export default App;

