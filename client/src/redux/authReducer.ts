import { AuthAction, AuthActionTypes, AuthState } from '../types/types';
import Cookies from 'js-cookie';

const initialState: AuthState = {
  isLoggedIn: !!Cookies.get('Dsh'),
};

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isLoggedIn: true };
    case AuthActionTypes.LOGOUT:
      return { ...state, isLoggedIn: false };
    // case AuthActionTypes.SET_USERNAME:
    //   return { ...state, username: action.payload };
    default:
      return state;
  }
};
