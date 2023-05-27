/* eslint-disable react/prop-types */
import { Button, Chip, Divider, Grid, Typography } from "@mui/material";
import { handleBorrarTodo } from "../store/slices/todos/todoSlice";
import { useDispatch } from "react-redux";
import TransitionModal from "./Modal";
import { useState } from "react";
import { resetForm, setEditForm, setModal } from "../store/slices/form/formSlice";



const Todo = ({ todo }) => {
  const { descripcion, prioridad, titulo, estado } = todo;
 
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    // console.log(todo);
    dispatch(setEditForm(todo))
    dispatch(setModal({ editar: true}))
  
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(setModal({ editar: false }));
    dispatch(resetForm())
  };
 

  // console.log(todo);
  return (
    <>
      <TransitionModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Grid container alignItems="center" spacing={2} >
        <Grid item xs={12} sm={4}>
          <Typography fontWeight={700} mb={2}>Título: {titulo}</Typography>
          <Typography fontStyle={"italic"}>Descripción: {descripcion.length > 25 ? `${descripcion.slice(0, 25)}...` : descripcion}</Typography>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography  fontStyle={"italic"} mb={1}>Prioridad</Typography>
          <Chip
            label={prioridad}
            sx={{
              backgroundColor:
                prioridad === "Alta"
                  ? "#830707" // Color de fondo para prioridad Alta
                  : prioridad === "Media"
                  ? "#023a02" // Color de fondo para prioridad Media
                  : "#022441", // Color de fondo para prioridad Baja
              color: "#ffffff", // Color de texto (blanco)
            }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <Typography  fontStyle={"italic"} mb={1}>Estado</Typography>
          <Chip
            label={estado}
            color={
              estado === "En proceso"
                ? "primary"
                : estado === "Finalizada"
                ? "success"
                : "secondary"
            }
          />
        </Grid>
        <Grid item xs={6} sm={2} textAlign="left">
          <Button
            color="primary"
            variant="contained"
            onClick={() => handleOpen()}
            fullWidth
          >
            Editar
          </Button>
        </Grid>
        <Grid item xs={6} sm={2} textAlign="right">
          <Button
            color="error"
            variant="contained"
            onClick={() => dispatch(handleBorrarTodo(todo.id))}
            fullWidth
          >
            Borrar
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 2, mb: 2 }} />
    </>
  );
}

export default Todo;