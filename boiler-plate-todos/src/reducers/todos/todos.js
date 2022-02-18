import { createSlice } from "@reduxjs/toolkit";

// reducer의 초기 상태
const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    ADD(state, action) {
      state.todos.push({ id: Date.now(), content: action.payload });
    },
  },
});

export const todoActions = todosSlice.actions;

export default todosSlice.reducer;
