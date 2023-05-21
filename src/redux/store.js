import { configureStore } from "@reduxjs/toolkit";
import {persistedReducer} from "./toDoListSlice";
import { persistStore } from 'redux-persist'

export const store = configureStore({
  reducer: {
    toDoList: persistedReducer,
  },
});

export const persistor = persistStore(store);