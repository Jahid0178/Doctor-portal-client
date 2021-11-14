import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const url = `http://localhost:4000/appointments?email=${user.email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [date, user.email]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="Appointments table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Schedule</TableCell>
            <TableCell align="center">Service</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment) => (
            <TableRow
              key={appointment._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {appointment.patientName}
              </TableCell>
              <TableCell align="center">{appointment.date}</TableCell>
              <TableCell align="center">{appointment.serviceName}</TableCell>
              <TableCell align="center">
                {appointment.payment ? (
                  "Paid"
                ) : (
                  <Link
                    to={`/dashboard/payment/${appointment._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained">Pay</Button>
                  </Link>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Appointments;
