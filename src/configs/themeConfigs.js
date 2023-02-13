import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Roboto"].join(","),
  },
  container: {
    bgColor: 'blue'
  }
});

export default theme;
