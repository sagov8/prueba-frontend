import Image from "mui-image";
import { Stack, Typography, Fab, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <Grid
      container
      alignItems="center"
      display="flex"
      columns={{xs: 12, md: 12}}
      spacing={{xs: 2, md: 1}}
      sx={{ backgroundColor: "#502c1d", height:200 }}
    >
      <Grid item xs={12} md={6} >
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" >
          <Image width={100} src="src/assets/logoFooter.png" />
          <Typography fontSize={12} color={"white"}>
            © 2021 JAVIER PEREIRA. All Rights Reserved
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} alignItems="center">
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <Typography fontSize={12} color={"white"} letterSpacing={2}>
            Follow us
          </Typography>
          <Stack direction="row" spacing={1}>
            <Fab sx={{ color: "white" }} size="small">
              <FacebookIcon />
            </Fab>
            <Fab sx={{ color: "white" }} size="small">
              <InstagramIcon />
            </Fab>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
