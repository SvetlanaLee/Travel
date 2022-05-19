import { initState } from '../initState';

export const errorReducerLogin = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_ERROR_LOGIN':
      return payload;
  
    default:
      return state;
  }
}
