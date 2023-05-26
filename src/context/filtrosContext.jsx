import { createContext, useState } from "react";
const FiltrosContext = createContext();

const FiltrosProvider = ({ children }) => {
  const [filtroPrioridad, setFiltroPrioridad] = useState("Sin Filtro");
  const [filtroEstado, setFiltroEstado] = useState("Sin Filtro");
  const [todosFiltrados, setTodosFiltrados] = useState([])
  return (
    <FiltrosContext.Provider value={{
        filtroPrioridad,
        setFiltroPrioridad,
        filtroEstado,
        setFiltroEstado,
        todosFiltrados,
        setTodosFiltrados
    }}>
        {children}
    </FiltrosContext.Provider>
  );
};

export { FiltrosProvider };
export default FiltrosContext;
