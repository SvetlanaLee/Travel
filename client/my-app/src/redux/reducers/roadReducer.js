import { initState } from '../initState';

export const roadReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ONE_ROAD':
      return { ...payload }
    default:
      return state;
  }
}
