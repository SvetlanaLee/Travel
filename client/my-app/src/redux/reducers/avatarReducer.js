import { initState } from '../initState';

export const avatarReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_AVATAR':
      return payload;
    default:
      return state;
  }
}
