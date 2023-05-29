import { configureStore } from "@reduxjs/toolkit";
import reducer from "./toDoListSlice";

export const store = configureStore({
  reducer: {
    toDoList: reducer,
  },
});
