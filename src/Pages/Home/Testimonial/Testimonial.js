import { Container, Grid, Paper, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import React from "react";
import personOne from "../../../images/people-1.png";
import personTwo from "../../../images/people-2.png";
import personThree from "../../../images/people-3.png";
import clientBg from "../../../images/client-bg.png";

const backgroundImg = {
  background: `url(${clientBg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "top right",
};

const Testimonial = () => {
  return (
    <Container sx={{ my: 5 }} style={backgroundImg}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 2, color: "#14d1ca" }}
      >
        Testimonial
      </Typography>
      <Typography variant="h3" sx={{ mb: 5 }}>
        What's Our Patients <br /> Says
      </Typography>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute to using 'Content here' content.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "60px", mr: 1 }}
                  image={personOne}
                  alt="green iguana"
                />
                <Box>
                  <Typography variant="h6">Winson Herry</Typography>
                  <Typography>California</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute to using 'Content here' content.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "60px", mr: 1 }}
                  image={personTwo}
                  alt="green iguana"
                />
                <Box>
                  <Typography variant="h6">Elsa Sonia</Typography>
                  <Typography>Italy</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper sx={{ px: 3, py: 5 }}>
              <Typography sx={{ mb: 5 }}>
                It is a long established fact that by the readable content of a
                lot layout. The point of using lorem a more-or-less normal
                distribute to using 'Content here' content.
              </Typography>
              <Box sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: "60px", mr: 1 }}
                  image={personThree}
                  alt="green iguana"
                />
                <Box>
                  <Typography variant="h6">Ema Wilson</Typography>
                  <Typography>Canada</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Testimonial;
