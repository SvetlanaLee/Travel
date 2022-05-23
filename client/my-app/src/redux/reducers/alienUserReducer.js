import { initState } from '../initState';

export const alienUserReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
  
    case 'GET_USER':
      return payload;
  
    default:
      return state;
  }
}
