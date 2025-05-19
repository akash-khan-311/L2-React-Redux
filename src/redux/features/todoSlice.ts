import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  priority?: string;
  isCompleted?: boolean;
};

const initialState: { todos: TTodo[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
