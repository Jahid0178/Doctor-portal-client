import {
  Button,
  CircularProgress,
  Container,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import login from "../../../images/login.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const { user, registerUser, isLoading, error } = useAuth();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.confirmPassword) {
      alert("Your password didn't matched");
      return;
    }
    registerUser(loginData?.email, loginData?.password);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2} sx={{ mb: 3, textAlign: "center" }}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1">Register Your Account</Typography>
          {!isLoading && (
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
                sx={{ width: "75%", mb: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", mb: 1 }}
                id="standard-basic"
                label="Confirm Your Password"
                type="password"
                name="confirmPassword"
                onChange={handleOnChange}
                variant="standard"
              />
              <Button
                sx={{ width: "75%", mt: 2 }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text" sx={{ mt: 1 }}>
                  Already Registered? Please Login
                </Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Create User Successfully</Alert>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "95%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
