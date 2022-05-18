import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import PageHome from "./pages/PageHome";
import UserSignup from './components/UserSignup/UserSignup';

import UserSignin from './components/UserLogin/UserLogin'
import PageRoads from "./pages/PageRoads/PageRoads";



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3001/session', {
      credentials: 'include'
    }).then(data => data.json())
      .then(user => dispatch({ type: 'SET_USER', payload: user}))
  }, [dispatch]);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navigation/>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/roads" element={<PageRoads />} />
          <Route path='/reg' element={<UserSignup/>}/>
          <Route path='/login' element={<UserSignin/>}/>

          {/* <Route path="/test" element={<PageTest />} /> */}
        </Routes>
      {/* </header> */}

    </div>

  );
}

export default App;
