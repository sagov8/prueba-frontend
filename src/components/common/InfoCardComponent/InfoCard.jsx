import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  Divider,
  Box,
  Stack,
  Rating,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CircleRoundedIcon from "@mui/icons-material/CircleRounded";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import SizeSelect from "./SizeSelector";
import {
  addToCart,
  getCartTotal,
} from "../../../redux/features/cartSlice";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#4f2b1d",
  },
});

export default function InfoCard() {
  const [count, setCount] = useState(0);

  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  const { cart } = useSelector(
    (state) => state.allCart
  );

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <Box>
      {items.map((item) => (
        <Card
          key={item.id}
          elevation={15}
          display="flex"
          sx={{ minwidth: 1 / 3 }}
        >
          <CardContent sx={{ marginLeft: 2, marginTop: 4 }}>
            <Typography
              variant="h5"
              sx={{
                textTransform: "uppercase",
                marginLeft: 1,
                marginBottom: 2,
              }}
              fontWeight={900}
              letterSpacing={2}
            >
              {item.type}
            </Typography>
            <Typography
              variant="h2"
              sx={{ textTransform: "uppercase", marginBottom: 1 }}
              fontSize={80}
              fontWeight={900}
              color="#502c1d"
              style={{ lineHeight: "0.8" }}
            >
              {item.productName}
            </Typography>
            <Divider style={{ background: "#8cf1f0", height: 6, width: "60%" }} />
            <Stack direction="row" spacing={4} my={3}>
              <Typography
                variant="h6"
                sx={{ textTransform: "uppercase" }}
                fontWeight={900}
                letterSpacing={2}
              >
                roast
              </Typography>
              <Box>
                <StyledRating
                  name="size-medium"
                  defaultValue={1}
                  readOnly
                  icon={<CircleRoundedIcon fontSize="inherit" />}
                  emptyIcon={<CircleOutlinedIcon />}
                  max={3}
                />
                <Typography
                  component="legend"
                  sx={{ textTransform: "uppercase" }}
                  letterSpacing={1}
                >
                  {item.roast}
                </Typography>
              </Box>
            </Stack>
            <Stack direction="row" spacing={4} mb={3} alignItems="center">
              <Typography
                variant="h6"
                sx={{ textTransform: "uppercase" }}
                fontWeight={900}
                letterSpacing={2}
              >
                taste
              </Typography>
              <Typography paragraph={true}>{item.taste}</Typography>
            </Stack>
            <Stack mb={3}>
              <Typography
                variant="h6"
                sx={{ textTransform: "uppercase" }}
                fontWeight={900}
                letterSpacing={2}
              >
                bag size
              </Typography>
              <SizeSelect item={item}/>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              my={1}
              alignItems="center"
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <IconButton
                  onClick={() =>
                    count >= 1 ? setCount(count - 1) : setCount(0)
                  }
                >
                  <RemoveOutlinedIcon />
                </IconButton>
                <Typography variant="h6">{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddOutlinedIcon />
                </IconButton>
              </Stack>
              <Typography variant="h6">${item.price * count}</Typography>
            </Stack>
            <Divider />
            <Box mt={2} mb={2}>
              <Typography paragraph={true} fontWeight={100}>
                Tenemos envíos a domicilio en Bogotá, Cali, Montería, Neiva,
                Soledad y Valledupar.
              </Typography>
            </Box>
            <Box my={3}>
              <Button
                color={"primary"}
                variant={"contained"}
                size={"large"}
                sx={{
                  bgcolor: "#190d51",
                  borderRadius: 6,
                  textTransform: "uppercase",
                }}
                onClick={() => dispatch(addToCart(item))}
              >
                añadir al carrito
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
