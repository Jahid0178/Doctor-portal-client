import React from "react";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import treatment from "../../../images/treatment.png";
import { Box } from "@mui/system";

const alignment = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const DentalCare = () => {
  return (
    <Container sx={{ flexGrow: 1, mt: 4, pb: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} style={alignment}>
          <img style={{ width: 350 }} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={alignment}>
          <Box>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Exceptional Dental <br /> Care, on Your Terms
            </Typography>
            <Typography sx={{ my: 3 }}>
              Our focus is on your overall well being and helping you achieve
              optimal health and esthetics. We provide state-of-the-art dental
              care in a comfortable. Bleaching methods use carbamide peroxide
              which reacts with water to form hydrogen peroxide. The implant
              fixture is first placed, so that it is likely to osseointegrate,
              then a dental prosthetic is added
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: 160,
                background:
                  "linear-gradient(to right, rgba(24, 210, 176, 1), rgb(15, 207, 233, 1))",
                mt: 5,
              }}
            >
              Learn More
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DentalCare;
