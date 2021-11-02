import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Booking = (props) => {
  const { name, time, space } = props.booking;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ py: 2, textAlign: "center" }}>
        <Typography
          sx={{ color: "#18d2b0" }}
          variant="h5"
          gutterBottom
          component="div"
        >
          {name}
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          {time}
        </Typography>
        <Typography variant="caption" display="block">
          {space} SPACES AVAILABLE
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            py: 1.3,
            background:
              "linear-gradient(to right, rgba(24, 210, 176, 1), rgb(15, 207, 233, 1))",
          }}
        >
          Booking Appointment
        </Button>
      </Paper>
    </Grid>
  );
};

export default Booking;
