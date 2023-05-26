import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  todos:[], 
  filtroAplicado: false, // Variable para controlar si se aplica el filtro
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    handleNewTodo: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      // return [...state,action.payload]
      state.todos.push(action.payload);
    },
    handleBorrarTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      
    },
    setFiltrar: (state, action) => {
      const { filtro } = action.payload;
      state.filtroAplicado = filtro;
    },
    handleEditarTodo: (state, action) => {
      const { id, titulo, prioridad, estado, descripcion } = action.payload;
      const todoToEdit = state.todos.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.titulo = titulo;
        todoToEdit.prioridad = prioridad;
        todoToEdit.estado = estado;
        todoToEdit.descripcion = descripcion;
      }
    },
  },
});


export const { handleNewTodo, handleBorrarTodo, handleEditarTodo,setFiltrar } =
  todosSlice.actions;

export default todosSlice.reducer;
