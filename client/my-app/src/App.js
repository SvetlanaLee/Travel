import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';


function App() {
  return (

    <div className='container'>

    <Routes>
     

      <Route path='/reg' element={<UserSignup/>}/>
    </Routes>
    </div>

  );
}

export default App;
