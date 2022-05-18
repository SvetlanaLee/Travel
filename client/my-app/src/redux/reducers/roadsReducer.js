import { initState } from '../initState';

export const roadsReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ROADS':
      return [ ...payload ]
    default:
      return state;
  }
}
