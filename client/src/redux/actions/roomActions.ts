import { RoomActionTypes } from '../types/types';

export const createRoom = (roomName: string, roomDescription?:string) => ({
  type: RoomActionTypes.CREATE,
  payload: {roomName,roomDescription}
});

export const editRoom = (roomId: number, roomName?:string, roomDescription?:string, members?:number[]) => ({
    type: RoomActionTypes.EDIT,
    payload: {roomId,roomName,roomDescription,members}
  });

export const deleteRoom = (roomId: number) => ({
  type: RoomActionTypes.DELETE,
  payload: roomId
  
});
