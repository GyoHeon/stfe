import { configureStore as rootStore } from "@reduxjs/toolkit";
import todosSlice from "../reducers/todos/todos";

const store = rootStore({ reducer: { todos: todosSlice } });

export default store;
