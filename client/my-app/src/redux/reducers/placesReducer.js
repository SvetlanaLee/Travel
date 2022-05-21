import { initState } from '../initState';

export const placesReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_PLACES':
      return [ ...payload ]
    default:
      return state;
  }
}
