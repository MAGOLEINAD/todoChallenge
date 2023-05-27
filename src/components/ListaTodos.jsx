/* eslint-disable react/prop-types */
import { Box, Container, Typography } from "@mui/material";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import useFiltros from "../hooks/useFiltros";
import { useEffect } from "react";





const ListaTodos = () => {
  const todos = useSelector(state => state.todos.todos)
  const filtroAplicado = useSelector(state => state.todos.filtroAplicado)
  // console.log(filtroAplicado);
  const { filtroPrioridad, filtroEstado,todosFiltrados,setTodosFiltrados } = useFiltros();
 
  
  // console.log(todos);

  // Filtrar los Todos
  useEffect(() => {
    setTodosFiltrados(todos?.filter(todo => todo.prioridad === filtroPrioridad ||  todo.estado === filtroEstado  ));
  }, [filtroPrioridad, filtroEstado,todos]);
  
  return (
    <>
    
    <Container>
    {todos?.length === 0 ? <Typography variant="h4" mt={5} mb={3} align="center">Agrega un Todo a la Lista</Typography> : 
      <Box component="div" p={2} mt={1} boxShadow={2} borderRadius={2} sx={{   backgroundColor: 'white' }}>
      {filtroAplicado ? todosFiltrados.map(todo => (
                           <Todo key={todo.id} todo={todo} />))
                           : todos?.map ((todo => <Todo key={todo.id} todo={todo} />))}
      
      </Box>
    
    }
      </Container>
    </>
  );
};

export default ListaTodos;
