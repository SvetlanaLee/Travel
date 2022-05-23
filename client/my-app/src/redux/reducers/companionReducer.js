import { initState } from '../initState';

export const companionReducer = (state = initState, action)=>{
  const { type, payload } = action;

  switch (type) {
    case 'GET_COMPANIONS':
      return [ ...payload ];
  
    default:
      return state;
  }
}
