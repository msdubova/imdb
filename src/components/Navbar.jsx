import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Trending
        </Button>
        <Button color="inherit" component={Link} to="/search">
          Search
        </Button>
        <Button color="inherit" component={Link} to="/movies">
          Movies
        </Button>
        <Button color="inherit" component={Link} to="/tv">
          TV Shows
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
