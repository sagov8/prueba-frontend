import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../redux/features/cartSlice";
import {
  Box,
  Card,
  Typography,
  CardContent,
  IconButton,
  Stack,
  Divider,
  Grid,
  List,
  ListItem,
  Button,
  CardHeader,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export default function ShoppingCart() {
  const style = {
    bgcolor: "background.paper",
    boxShadow: 10,
    p: 3,
    m: 2,
  };

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <Box sx={style}>
      <Grid container spacing={2} columns={{ xs: 6, md: 12 }}>
        <Grid item xs={6}>
          <Card variant="root">
            <CardContent>
              <Stack
                direction={{ sx: "columns", md: "row" }}
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                my={2}
                alignItems="center"
              >
                <Typography
                  variant="h3"
                  sx={{ textTransform: "uppercase" }}
                  fontWeight={900}
                  letterSpacing={2}
                >
                  Carrito
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ textTransform: "uppercase" }}
                  fontWeight={900}
                  letterSpacing={2}
                >
                  {cart.length} item(s)
                </Typography>
              </Stack>
              {cart.length === 0 ? (
                <Typography paragraph={true}>
                  No has agregado productos al carrito.
                </Typography>
              ) : (
                ""
              )}
              {cart?.map((data) => (
                <Card mt={2} p={2} key={data.id}>
                  <CardHeader
                    action={
                      <IconButton
                        aria-label="delete"
                        onClick={() => dispatch(removeItem(data.id))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    }
                    title={
                      <Typography
                          variant="h6"
                          sx={{ textTransform: "uppercase" }}
                          fontWeight={900}
                          letterSpacing={2}
                        >
                          {data.productName}
                        </Typography>
                    }
                    subtitle={
                      "Coffee"
                    }
                  />
                  <CardContent>
                    <Stack
                      direction={{ sx: "columns", md: "row" }}
                      spacing={6}
                      mx={3}
                      display="flex"
                    >
                      <Box alignItems="center" justifyContent="center">
                        <img
                          src={data.imageUrl}
                          width={100}
                          alt="Sweet Energy Coffee"
                        />
                      </Box>

                      <Box>
                        <Stack
                          divider={<Divider orientation="vertical" flexItem />}
                        >
                          <Typography variant="h6">Cantidad:</Typography>
                          <Stack
                            direction="row"
                            spacing={3}
                            alignItems="center"
                          >
                            <IconButton
                              onClick={() =>
                                dispatch(decreaseItemQuantity(data.id))
                              }
                              disabled={data.quantity >= 1? false: true}
                            >
                              <RemoveOutlinedIcon />
                            </IconButton>
                            <Typography variant="h6">
                              {data.quantity}
                            </Typography>
                            <IconButton
                              onClick={() =>
                                dispatch(increaseItemQuantity(data.id))
                              }
                            >
                              <AddOutlinedIcon />
                            </IconButton>
                          </Stack>
                        </Stack>
                        <Stack>
                          <Typography variant="h6">Precio Unidad:</Typography>
                          <Typography paragraph={true}>
                            ${data.price}
                          </Typography>
                        </Stack>
                        <Stack>
                          <Typography variant="h6">Bag Size:</Typography>
                          <Typography paragraph={true}>
                            {data.bagSize}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="root">
            <CardContent>
              <List>
                <ListItem>
                  <Typography
                    variant="h3"
                    sx={{ textTransform: "uppercase" }}
                    fontWeight={900}
                    letterSpacing={2}
                  >
                    Resumen
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                  <Typography
                    variant="h6"
                    sx={{ textTransform: "uppercase" }}
                    fontWeight={500}
                    letterSpacing={4}
                  >
                    Cantidad Total: {totalQuantity}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography
                    variant="h6"
                    sx={{ textTransform: "uppercase" }}
                    fontWeight={500}
                    letterSpacing={4}
                  >
                    Total a Pagar: ${totalPrice}
                  </Typography>
                </ListItem>
                <Divider />
                <ListItem sx={{ marginTop: 3 }}>
                  <Button variant="contained" size="large">
                    Ir a Pagar
                  </Button>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
