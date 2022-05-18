import { initState } from '../initState';

export const errorReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'SET_ERROR':
      return payload;
  
    default:
      return state;
  }
}
