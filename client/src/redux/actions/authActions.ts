import { AuthActionTypes } from '../types/types';

export const login = (email: string) => ({
  type: AuthActionTypes.LOGIN,
  payload: email,
});

export const logout = () => ({
  type: AuthActionTypes.LOGOUT,
});
