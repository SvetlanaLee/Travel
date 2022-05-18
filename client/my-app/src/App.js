import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

import PageHome from "./pages/PageHome";

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';
import UserSignin from './components/UserLogin/UserLogin'
import PageRoads from "./pages/PageRoads/PageRoads";



function App() {

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
