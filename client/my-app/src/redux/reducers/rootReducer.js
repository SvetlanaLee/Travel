import { combineReducers } from 'redux';
import { signupFormReducer } from './SignUpReducer';
import { userReducer } from './userReducer';
import {  signinFormReducer } from './SignInReducer';

import { errorReducer } from './errorReducer';

import { roadsReducer } from './roadsReducer';
import { roadReducer } from './roadReducer';


export const rootReducer = combineReducers({
  signUpInputs: signupFormReducer,
  user: userReducer,

  logInInputs: signinFormReducer, 
  error: errorReducer,

 
  roads: roadsReducer,
  road: roadReducer,
});
