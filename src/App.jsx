import { Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./configs/themeConfigs";
import "./App.css";
import ShoppingCart from "./components/common/ShoppingCart";
import ProductLayout from "./components/layout/ProductLayout";
import TopBar from "./components/common/TopBar";
import Footer from "./components/common/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Grid style={theme.container}>
          <Grid my={4}>
            <TopBar />
          </Grid>
          <Routes>
            <Route exact path="/" element={<ProductLayout />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
          <Grid mt={38}  sx={{ alignSelf: "flex-end", width: "100%"}}>
            <Footer />
          </Grid>
        </Grid>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
