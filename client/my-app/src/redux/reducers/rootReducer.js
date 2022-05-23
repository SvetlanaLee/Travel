import { combineReducers } from 'redux';
import { signupFormReducer } from './SignUpReducer';
import { userReducer } from './userReducer';
import { signinFormReducer } from './SignInReducer';
import { errorReducer } from './errorReducer';
import { roadsReducer } from './roadsReducer';
import { errorReducerLogin } from './errorReducerLogin';
import { roadReducer } from './roadReducer';
import { inputsReducer } from './inputsReducer';
import { placesReducer } from './placesReducer';
import { commentReducer } from './commentReducer';
import { listOfCommentsReducer } from './listOfCommentsReducer';


export const rootReducer = combineReducers({
  signUpInputs: signupFormReducer,
  user: userReducer,
  logInInputs: signinFormReducer, 
  error: errorReducer,
  inputs: inputsReducer,
  errorLogin: errorReducerLogin,
  roads: roadsReducer,
  road: roadReducer,
  places: placesReducer,
  comment: commentReducer,
  allComments: listOfCommentsReducer,
});
