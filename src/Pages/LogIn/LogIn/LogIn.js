import { Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import login from "../../../images/login.png";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 3, textAlign: "center" }}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1">Login</Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", mb: 1 }}
              id="standard-basic"
              label="Your Email"
              type="email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%" }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
            />
            <Button
              sx={{ width: "75%", mt: 2 }}
              variant="contained"
              type="submit"
            >
              Sign In
            </Button>
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text" sx={{ mt: 1 }}>
                New User? Please Register
              </Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "95%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default LogIn;
