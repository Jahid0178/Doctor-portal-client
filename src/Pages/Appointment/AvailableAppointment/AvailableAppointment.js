import { Container, Grid } from "@mui/material";
import React from "react";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodontics",
    time: "08:00 AM - 09:00 AM",
    space: 10,
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "10:05 AM - 11:30 AM",
    space: 10,
  },
  {
    id: 3,
    name: "Teeth Cleaning",
    time: "05:00 PM - 06:30 PM",
    space: 10,
  },
  {
    id: 4,
    name: "Cavity Protection",
    time: "07:00 AM - 08:30 AM",
    space: 10,
  },
  {
    id: 5,
    name: "Teeth Orthodontics",
    time: "08:00 AM - 09:00 AM",
    space: 10,
  },
  {
    id: 6,
    name: "Teeth Orthodontics",
    time: "08:00 AM - 09:00 AM",
    space: 10,
  },
];

const AvailableAppointment = ({ date }) => {
  return (
    <Container>
      <h2>Available Appointments On {date.toDateString()}</h2>
      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking key={booking.id} booking={booking}></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
