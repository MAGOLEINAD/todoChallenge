import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";


export const blueTheme = createTheme({
    palette: {
    
        primary: {
            main:blue.A400
        },
        
        terciary: {
            main:grey[400]
        },
      
    }
})