import { Grid, Stack, Fab, Typography } from "@mui/material";
import InfoCard from "../common/InfoCardComponent/InfoCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "mui-image";
import ProductImage from "../../assets/Bolsa.png"

export default function ProductLayout() {

  return (
    <Grid container>
      <Grid
        container
        spacing={{ xs: 1, md: 0 }}
        justifyContent="center"
        alignItems="center"
        columns={{ xs: 4, md: 12 }}
      >
        <Grid
          item
          xs={4}
          md={6}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <Image width={500} height={750}  src={ProductImage} />
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          mx={{xs: 2, md: 0}}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <InfoCard />
        </Grid>
        <Grid
          item
          xs={1}
          md={2}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <Stack spacing={1}>
            <Fab variant="outlined">
              <ArrowForwardIosIcon />
            </Fab>
            <Typography
              variant="h6"
              sx={{ textTransform: "uppercase", width: 1 / 2 }}
              fontWeight={900}
              letterSpacing={2}
              style={{ lineHeight: "0.8" }}
            >
              Hard Work
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid mt={5} mx={{ xs: 3, md: "20%" }} width={{ xs: "100%", md: "45%" }}>
        <Stack justifyContent="center" alignItems="center" spacing={3}>
          <Typography variant="h2" fontWeight={700} color="#502c1d">
            Una mezcla de cafe con notas dulces de frutos del bosque.
          </Typography>
          <Typography variant="h5" color="#502c1d" fontWeight={400}>
            A través de un proceso único de tostado y mezcla hemos marcado los
            sabores de lo que más amamos. Desarrollando un café a base de granos
            seleccionados y con sabor natural que ofrece un sabor dulce y rico
            para compartir con tu momento preferido.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
