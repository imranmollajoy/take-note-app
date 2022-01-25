import { AppBar, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container
        sx={{
          py: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Take Note
        </Typography>
        <Typography variant="body1">Made with ❤️ by Imran Molla</Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
