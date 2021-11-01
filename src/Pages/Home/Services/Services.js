import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";

const services = [
  {
    img: fluoride,
    name: "Fluoride Treatment",
    description:
      "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce",
  },
  {
    img: cavity,
    name: "Cavity Filling",
    description:
      "If dental decay is caught in its early stages – before it progresses into the tooth, a filling may not be necessary. In fact, it can take four to eight years for surface decay to penetrate ",
  },
  {
    img: whitening,
    name: "Teeth Whitening",
    description:
      "The quickest, most dramatic way to whiten is to get an in-office bleaching at a dentist's office. Using professional-strength hydrogen peroxide and special lights or lasers, your",
  },
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      <Container>
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", color: "#18D2B0", mb: "1rem" }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{ textAlign: "center", fontWeight: 600 }}
        >
          Services We Provide
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {services.map((service) => (
            <Service key={service.name} service={service}></Service>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
