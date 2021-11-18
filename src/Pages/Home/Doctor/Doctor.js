import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const Doctor = (props) => {
  const { name, email, image } = props.doctor;
  return (
    <>
      <Grid item xs={12} sm={12} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ width: "100%" }}
            image={`data: image/png; base64, ${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Doctor;
