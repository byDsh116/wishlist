import { AnyAction } from '@reduxjs/toolkit';
import { AuthActionTypes, AuthState } from '../types/types';
import Cookies from 'js-cookie';

const initialState: AuthState = {
  isLoggedIn: !!Cookies.get('Dsh'),
};

export const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, isLoggedIn: true };
    case AuthActionTypes.LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};
