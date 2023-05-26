import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './slices/todos/todoSlice'
import formReducer from './slices/form/formSlice'


export const store = configureStore({
    reducer: {
      todos: todosReducer,
      form: formReducer
    },
  })