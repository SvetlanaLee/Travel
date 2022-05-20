import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

import PageHome from "./pages/PageHome";
// import PageOneRoad from "./pages/PageOneRoad";

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';
import UserSignin from './components/UserLogin/UserLogin'
import PageRoads from "./pages/PageRoads/PageRoads";
import PageOneRoad from './pages/PageRoads/PageOneRoad';

import Map1 from './yandexMap/Map';


function App() {
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
    <div>
      {/* <Map1 /> */}
    </div>
  </>
  );
}

export default App;

