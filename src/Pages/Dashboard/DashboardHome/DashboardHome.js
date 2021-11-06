import React from "react";
import Grid from "@mui/material/Grid";
import Calendar from "../../Shared/Calendar/Calendar";
import Appointments from "../../Appointment/Appointments/Appointments";
import { useState } from "react";

const DashboardHome = () => {
  const [date, setDate] = useState(new Date());
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Calendar date={date} setDate={setDate}></Calendar>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <Appointments date={date}></Appointments>
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
