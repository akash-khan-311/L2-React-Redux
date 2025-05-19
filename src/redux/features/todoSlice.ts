import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
  id: string;
  title: string;
  description: string;
  priority?: string;
  isCompleted?: boolean;
  time?: string;
};

const initialState: { todos: TTodo[]; allTodos: TTodo[] } = {
  todos: [],
  allTodos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      const newTodo = {
        ...action.payload,
        isCompleted: false,
        priority: action.payload.priority,
      };
      state.todos.push(newTodo);
      state.allTodos.push(newTodo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.allTodos = state.allTodos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      const original = state.allTodos.find(
        (todo) => todo.id === action.payload
      );
      if (todo && original) {
        todo.isCompleted = !todo.isCompleted;
        original.isCompleted = todo.isCompleted;
      }

      state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
    },

    filterTodos: (state, action: PayloadAction<string>) => {
      if (action.payload === "all") {
        state.todos = [...state.allTodos];
      } else {
        state.todos = state.allTodos.filter(
          (todo) => todo.priority === action.payload
        );
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, filterTodos } =
  todoSlice.actions;

export default todoSlice.reducer;
