import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  elements: [],
  elementId: 0,
  filter: "all",
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addElement: (state, action) => {
      const input = action.payload;

      if (input !== "") {
        state.elementId += 1;

        const newElement = {
          content: input,
          completed: false,
          id: state.elementId,
        };

        state.elements.push(newElement);
      }
    },

    deleteElement: (state, action) => {
      const id = action.payload;
      state.elements = state.elements.filter((el) => el.id !== id);
    },

    deleteAllCompleted: (state) => {
      state.elements = state.elements.filter((el) => !el.completed);
    },

    checkCompleted: (state, action) => {
      const id = action.payload;
      const index = state.elements.findIndex((el) => el.id === id);
      state.elements[index].completed = !state.elements[index].completed;
    },

    changeFilter: (state, action) => {
      const filter = action.payload;
      state.filter = filter;
    },

    reorderElements: (state, action) => {
      const result = action.payload;
      if (!result.destination) return;

      const [reorderedEl] = state.elements.splice(result.source.index, 1);
      state.elements.splice(result.destination.index, 0, reorderedEl);
    },
  },
});

export const {
  addElement,
  deleteElement,
  checkCompleted,
  deleteAllCompleted,
  changeFilter,
  reorderElements,
} = toDoListSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};

const { reducer } = toDoListSlice;

export const persistedReducer = persistReducer(persistConfig, reducer);

// export default reducer;
