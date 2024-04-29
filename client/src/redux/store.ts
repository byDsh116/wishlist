import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({ authReducer });
const store = configureStore({ reducer: rootReducer });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
