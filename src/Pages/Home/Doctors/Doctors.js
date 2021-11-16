import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ my: 2, textAlign: "center", fontWeight: 500 }}
      >
        Our Doctors {doctors.length}
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </Grid>
    </Container>
  );
};

export default Doctors;
