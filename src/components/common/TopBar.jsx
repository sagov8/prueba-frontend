import React, { useEffect } from "react";
import { Stack, Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../redux/features/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    
  },
}));

export default function TopBar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <Stack
      direction="row"
      spacing={2}
      display="flex"
      justifyContent="flex-end"
      mr={5}
    >
      <Fab
        variant="outlined"
        size="small"
        sx={{
          textTransform: "uppercase",
          borderRadius: 10,
        }}
      >
        en
      </Fab>
      <Fab
        variant="outlined"
        size="small"
        sx={{
          textTransform: "uppercase",
          borderRadius: 10,
        }}
      >
        es
      </Fab>
      <Link to="/cart">
        <Fab
          variant="extended"
          sx={{
            textTransform: "uppercase",
            borderRadius: 6,
          }}
          size="medium"
        >
          <StyledBadge badgeContent={totalQuantity} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </Fab>
      </Link>
    </Stack>
  );
}
