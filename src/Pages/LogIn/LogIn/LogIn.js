import {
  Button,
  Container,
  Typography,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import login from "../../../images/login.png";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LogIn = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, loginUser, error } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData?.email, loginData?.password, location, history);
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
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Login Successfully</Alert>
            )}
            {error && <Alert severity="error">{error}</Alert>}
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
