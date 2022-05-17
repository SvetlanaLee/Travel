import { combineReducers } from 'redux';
import { signupFormReducer } from './SignUpReducer';
import { userReducer } from './userReducer';


export const rootReducer = combineReducers({
  signUpInputs: signupFormReducer,
  user: userReducer,
});
