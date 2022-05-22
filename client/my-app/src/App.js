import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import PageHome from "./pages/PageHome";
import './App.css';
import UserSignup from './components/UserSignup/UserSignup';
import UserSignin from './components/UserLogin/UserLogin'
import PageRoads from "./pages/PageRoads/PageRoads";
import PageOneRoad from './pages/PageRoads/PageOneRoad';
import Person from './components/Person/Person';

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
          <Route path='/reg' element={<UserSignup/>}/>
          <Route path='/login' element={<UserSignin/>}/>
          <Route path='/roads/:id' element={<PageOneRoad/>}/>
          <Route path='/profile' element={<Person/>}/>
          <Route path='/upload' element={<Person/>}/>


          
        </Routes>
    </div>
  </>
  );
}

export default App;

