import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
  editar:false,
  titulo: "",
  prioridad: "Alta",
  estado: "Nueva",
  descripcion: "",
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    setEditForm: (state, action) => {
     return action.payload
    },
    resetForm: () => {
      return initialState;
    },
    setModal: (state, action) => {
      const { editar } = action.payload;
      state.editar = editar;
    },
    
  },
});

export const { setFormField, resetForm,setModal,setEditForm } = formSlice.actions;
export default formSlice.reducer;
