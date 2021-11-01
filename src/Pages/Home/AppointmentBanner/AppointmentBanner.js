import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import doctor from "../../../images/doctor.png";
import background from "../../../images/appointment-bg.png";
import { Button, Typography } from "@mui/material";

const appointmentBanner = {
  background: `url(${background})`,
  backgroundColor: "rgba(45, 58, 74, 0.9)",
  backgroundBlendMode: "darken",
  marginTop: 150,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AppointmentBanner = () => {
  return (
    <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: 500, marginTop: "-110px" }}
            src={doctor}
            alt=""
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h5" sx={{ color: "#18D2B0", mb: 2 }}>
              Appointment
            </Typography>
            <Typography variant="h2" sx={{ color: "#fff", fontWeight: 500 }}>
              Make an appointment Today
            </Typography>
            <Typography sx={{ color: "#fff", my: 2 }}>
              It is a long established fact that a reader will be distractedby
              the readable content of a page when looking at its
            </Typography>
            <Button
              variant="contained"
              style={{
                background:
                  "linear-gradient(to right, rgba(24, 210, 176, 0.8), rgb(15, 207, 233, 0.8))",
                width: "150px",
                height: "45px",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppointmentBanner;
