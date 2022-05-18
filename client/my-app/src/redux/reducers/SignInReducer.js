import { initState } from '../initState';

export const signinFormReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_TYPING':
      return { ...state, ...payload }
    case 'CLEAR_INPUTS':
      return { ...payload };
    default:
      return state;
  }
}
