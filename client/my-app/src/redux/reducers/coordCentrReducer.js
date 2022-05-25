import { initState } from '../initState';

export const coordCentrReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'GET_COORD':
      return [ ...payload ];
  
    default:
      return state;
  }
}
