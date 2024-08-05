export enum AuthActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  SET_USERNAME = 'SET_USERNAME',
}

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  email?: string;
  Cookies?: string;
}

export interface AuthAction {
  isLoggedIn: boolean;
  username?: string;
  email?: string;
  Cookies?: string;
}


export enum RoomActionTypes {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export interface RoomState {
roomId: number,
ownerId: number,
roomName: string,
roomDescription?:string
members?: number[]
}

export interface RoomAction {
  roomId: number,
  ownerId: number,
  roomName: string,
  roomDescription?:string
  members?: number[]
}
