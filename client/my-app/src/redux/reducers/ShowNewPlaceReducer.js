import { initState } from '../initState';

export const ShowNewPlaceReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_SHOW':
      return payload
    default:
      return state;
  }
}
