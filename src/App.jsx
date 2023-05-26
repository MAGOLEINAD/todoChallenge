import Formulario from "./components/Formulario";
import ListaTodos from "./components/ListaTodos";
import { Box, Divider, Typography } from "@mui/material";
import { FiltrosProvider } from "./context/filtrosContext";

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#f4f7fe" }}>
        <Typography variant="h1" component="h1" align="center" mt={4}>
          Todo APP
        </Typography>
        <Divider sx={{ mb: 8 }} />
        <FiltrosProvider>
          <Formulario />
          <ListaTodos />
        </FiltrosProvider>
      </Box>
    </>
  );
}

export default App;
