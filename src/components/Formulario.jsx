/* eslint-disable react/prop-types */
import {  Button,  Container,  Select,  TextField,  MenuItem,  InputLabel,  FormControl,  Grid,} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  handleNewTodo,
  handleEditarTodo,

} from "../store/slices/todos/todoSlice";
import { resetForm, setFormField } from "../store/slices/form/formSlice";
import Error from "./Error";
import { useState } from "react";
import Filtros from "./Filtros";
import useFiltros from "../hooks/useFiltros";

const Formulario = ({ handleClose }) => {
  const { todosFiltrados,filtroEstado,filtroPrioridad } = useFiltros();
  const [error, setError] = useState(false) 
  const formState = useSelector((state) => state.form);
  const dispatch = useDispatch();

  // console.log(formState);
  const { titulo, prioridad, estado, descripcion, editar } = formState;

  

  const onInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFormField({ name, value }));
  };

  const handleSubmit = () => {
    if (titulo.length < 1) {
      setError(true);
      return; // Finaliza la ejecución del código
    } else {
      setError(false);

      const newTodo = {
        id: new Date().getTime(),
        titulo,
        prioridad,
        estado,
        descripcion,
      };
      dispatch(handleNewTodo(newTodo));
      dispatch(resetForm());
    }
  };
  const handleEditar = () => {
    // const { id, titulo, prioridad, estado, descripcion } = formState;
    // const editedTodo = {
    //   id,
    //   titulo,
    //   prioridad,
    //   estado,
    //   descripcion,
    // };
    dispatch(handleEditarTodo(formState));
    handleClose();
    dispatch(resetForm());
  };

  return (
    <Container>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "white" }}
          >
            <TextField
              id="titulo"
              label="Agregar Todo"
              value={titulo}
              onChange={onInputChange}
              name="titulo"
              required
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "white" }}
          >
            <InputLabel id="Prioridad">Prioridad</InputLabel>
            <Select
              labelId="Prioridad"
              id="Prioridad"
              label="Prioridad"
              value={prioridad}
              name="prioridad"
              onChange={onInputChange}
              required
            >
              <MenuItem value="Alta">Alta</MenuItem>
              <MenuItem value="Media">Media</MenuItem>
              <MenuItem value="Baja">Baja</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4}>
          <FormControl
            fullWidth
            variant="outlined"
            sx={{ backgroundColor: "white" }}
          >
            <InputLabel id="Estado">Estado</InputLabel>
            <Select
              labelId="Estado"
              id="Estado"
              value={estado}
              variant="outlined"
              label="Estado"
              name="estado"
              onChange={onInputChange}
              required
            >
              <MenuItem value="Nueva">Nueva</MenuItem>
              <MenuItem value="En proceso">En proceso</MenuItem>
              <MenuItem value="Finalizada">Finalizada</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ backgroundColor: "white" }}>
            <TextField
              id="descripcion"
              label="Descripción"
              multiline
              rows={4}
              variant="outlined"
              name="descripcion"
              value={formState.descripcion}
              onChange={onInputChange}
            />
          </FormControl>
          <Grid container columnSpacing={1}>
            <Grid item xs={12}>
              <Button
                onClick={editar ? handleEditar : handleSubmit}
                sx={{ mb: 2, mt: 1 }}
                variant="contained"
                fullWidth
              >
                {editar ? "Editar TODO" : "Agregar TODO"}
              </Button>
              {error && <Error>Completa los campos por favor</Error>}
              {todosFiltrados.length === 0 && filtroEstado !== "Sin Filtro" && <Error>No hay coincidencias con esos Filtros</Error>}
              {todosFiltrados.length === 0 && filtroPrioridad !== "Sin Filtro" && <Error>No hay coincidencias con esos Filtros</Error>}
            </Grid>
          
           {!editar && <Filtros/> } 
           
          </Grid>
       
        </Grid>
      </Grid>
    </Container>
  );
};

export default Formulario;
