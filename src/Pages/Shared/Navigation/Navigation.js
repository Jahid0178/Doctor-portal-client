import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navigation.css";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              Doctors Portal
            </Link>
          </Typography>
          <Link to="/appointment" style={{ textDecoration: "none" }}>
            <Button color="inherit" style={{ color: "white" }}>
              Appointment
            </Button>
          </Link>
          {user.email ? (
            <Button onClick={logOut} style={{ color: "white" }}>
              Log Out
            </Button>
          ) : (
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              <Button style={{ color: "white" }} color="inherit">
                Login
              </Button>
            </NavLink>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
