import React from "react";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const bannerBg = {
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const verticalAlign = {
  display: "flex",
  alignItems: "center",
  height: 450,
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5} style={verticalAlign}>
          <Box>
            <Typography variant="h3" sx={{ my: 2 }}>
              Your New Smile <br /> Starts Here
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              enim quas eius perspiciatis eligendi adipisci, dignissimos
              eveniet. Eveniet, harum officiis.
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "45px",
                marginTop: 2,
                background:
                  "linear-gradient(to right, rgba(24, 210, 176, 1), rgb(15, 207, 233, 1))",
              }}
            >
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={7} style={verticalAlign}>
          <img style={{ width: 550 }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
