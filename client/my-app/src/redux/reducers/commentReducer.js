import { initState } from '../initState';

export const commentReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'USER_TYPING_COM':
      return { ...state, ...payload }
    case 'CLEAR_INPUTS':
      return { ...payload };
    case 'SET_COMMENT':
        return payload;
    default:
        return state;
      }
    }   

