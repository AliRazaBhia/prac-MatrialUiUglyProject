import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette:{
        primary:{
            main:"#A3A3A3",
            backGroundMainColor : "#121212"
        }
    },
    typography: {
        fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
      },
})

