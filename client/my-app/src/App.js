import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

import PageHome from "./pages/PageHome";
// import PageOneRoad from "./pages/PageOneRoad";

import './App.css';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';
import UserSignin from './components/UserLogin/UserLogin'
import PageRoads from "./pages/PageRoads/PageRoads";
import PageOneRoad from './pages/PageRoads/PageOneRoad';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

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
        </Routes>
    </div>
  </>
  );
}

export default App;

