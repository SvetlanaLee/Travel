import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Navigation/>
        <Routes>
        <Route path='/reg' element={<UserSignup/>}/>
          {/* <Route path="/test" element={<PageTest />} /> */}
        </Routes>
      {/* </header> */}

    </div>

  );
}

export default App;
