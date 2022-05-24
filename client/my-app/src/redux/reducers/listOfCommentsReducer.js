import { initState } from '../initState';

export const listOfCommentsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_COMMENTS':
      return [ ...state, payload]
    case 'GET_COMMENTS':
      return [ ...payload]
    default:
      return state;
  }
}


      
  
 