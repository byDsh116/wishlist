export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_USERNAME = 'SET_USERNAME',
}

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
}

export interface AuthAction {
  type: AuthActionTypes;
  payload?: string;
}
