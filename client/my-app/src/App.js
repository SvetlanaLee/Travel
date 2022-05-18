import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation';

import PageHome from "./pages/PageHome";

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import UserSignup from './components/UserSignup/UserSignup';
import UserSignin from './components/UserLogin/UserLogin'


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
    <div className="App">
      {/* <header className="App-header"> */}
        <Navigation/>
        <Routes>

          <Route path="/" element={<PageHome />} />
        <Route path='/reg' element={<UserSignup/>}/>
        <Route path='/login' element={<UserSignin/>}/>

          {/* <Route path="/test" element={<PageTest />} /> */}
        </Routes>
      {/* </header> */}

    </div>

  );
}

export default App;
