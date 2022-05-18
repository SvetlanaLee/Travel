import { combineReducers } from 'redux';
import { signupFormReducer } from './SignUpReducer';
import { userReducer } from './userReducer';
import {  signinFormReducer } from './SignInReducer';

import { errorReducer } from './errorReducer';

import { roadsReducer } from './roadsReducer';



export const rootReducer = combineReducers({
  signUpInputs: signupFormReducer,
  user: userReducer,

  logInInputs: signinFormReducer, 
  error: errorReducer

  logInInputs: signinFormReducer,
  roads: roadsReducer,

});
