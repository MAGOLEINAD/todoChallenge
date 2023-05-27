/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, Grid, MenuItem, Select } from "@mui/material";
import useFiltros from "../hooks/useFiltros";
import { useDispatch } from "react-redux";
import { setFiltrar } from "../store/slices/todos/todoSlice";
import { useEffect } from "react";
import FormHelperText from '@mui/material/FormHelperText';


const Filtros = () => {
  const { filtroPrioridad, setFiltroPrioridad, filtroEstado, setFiltroEstado } =  useFiltros();
  const dispatch = useDispatch();

  useEffect(() => {
    if (filtroEstado !== "Sin Filtro" || filtroPrioridad !== "Sin Filtro" ) {
      dispatch(setFiltrar({ filtro: true }))
     } else 
    dispatch(setFiltrar({ filtro: false }));
  }, [filtroEstado,filtroPrioridad])
  


  return (
    <>
      
      <Grid item xs={6}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
          sx={{ backgroundColor: "white", mt: 1 }}
        >
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={filtroPrioridad}
            name="prioridad"
            onChange={(e) => setFiltroPrioridad(e.target.value)}
            disabled= {filtroEstado !== "Sin Filtro" && true}
          >
            <MenuItem disabled value={null}>
              Filtrar por Prioridad
            </MenuItem>
            <MenuItem value="Sin Filtro">Sin Filtro</MenuItem>
            <MenuItem value="Alta">Alta</MenuItem>
            <MenuItem value="Media">Media</MenuItem>
            <MenuItem value="Baja">Baja</MenuItem>
          </Select>
        
        </FormControl>
        <FormHelperText  sx={{  ml: 1 }}>Filtrar por Prioridad</FormHelperText>
      </Grid>
      <Grid item xs={6}>
        <FormControl
          fullWidth
          size="small"
          variant="outlined"
          sx={{ backgroundColor: "white", mt: 1 }}
        >
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={filtroEstado}
            variant="outlined"
            name="estado"
            onChange={(e) =>setFiltroEstado(e.target.value) }
            disabled= {filtroPrioridad !== "Sin Filtro" && true}
          >
            <MenuItem disabled value={null}>
              Filtrar por Estado
            </MenuItem>
            <MenuItem value="Sin Filtro">Sin Filtro</MenuItem>
            <MenuItem value="Nueva">Nueva</MenuItem>
            <MenuItem value="En proceso">En proceso</MenuItem>
            <MenuItem value="Finalizada">Finalizada</MenuItem>
          </Select>
         
        </FormControl>
        <FormHelperText sx={{  ml: 1 }}>Filtrar por Estado</FormHelperText>
      </Grid>
    </>
  );
};

export default Filtros;
