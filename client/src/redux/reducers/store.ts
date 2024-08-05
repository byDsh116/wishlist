import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../authReducer'; // Именованный импорт

const rootReducer = combineReducers({ auth: authReducer }); // Используем ключ 'auth'
const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
