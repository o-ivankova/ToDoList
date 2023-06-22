import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducer from "./toDoListSlice";

/* export const store = configureStore({
  reducer: {
    toDoList: reducer,
  },
}); */

const rootReducer = combineReducers({
  toDoList: reducer
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
