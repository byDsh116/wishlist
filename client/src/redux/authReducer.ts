import { AnyAction } from '@reduxjs/toolkit';
import { AuthActionTypes, AuthState } from './types/types';
import Cookies from 'js-cookie'; // импортируем js-cookie

const initialState: AuthState = {
  isLoggedIn: !!localStorage.getItem('email'),
  email: localStorage.getItem('email') || '',
};

export const authReducer = (
  state: AuthState = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      localStorage.setItem('email', action.payload || '');
      return { ...state, isLoggedIn: true, email: action.payload || '' };
    case AuthActionTypes.LOGOUT:
      localStorage.removeItem('email'); // Удаляем email из localStorage
      Cookies.remove('Dsh'); // Удаляем куки с именем 'Dsh'
      return { ...state, isLoggedIn: false, email: '' };
    default:
      return state;
  }
};
