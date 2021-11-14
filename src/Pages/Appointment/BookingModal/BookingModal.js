import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
};

const BookingModal = ({
  openBooking,
  handleBookingClose,
  booking,
  date,
  setBookingSuccess,
}) => {
  const { name, time, price } = booking;
  const { user } = useAuth();
  const initialInfo = {
    patientName: user.displayName,
    email: user.email,
    phone: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    console.log(newInfo);
    setBookingInfo(newInfo);
  };

  const handleBookingSubmit = (e) => {
    const appointment = {
      ...bookingInfo,
      time,
      price,
      serviceName: name,
      date: date.toLocaleDateString(),
    };

    fetch("http://localhost:4000/appointments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setBookingSuccess(true);
          handleBookingClose();
        }
      });
    e.preventDefault();
  };
  return (
    <Modal
      open={openBooking}
      onClose={handleBookingClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <form onSubmit={handleBookingSubmit}>
          <TextField
            disabled
            sx={{ width: "100%", pb: 2 }}
            id="outlined-size-small"
            defaultValue={time}
            size="small"
          />
          <TextField
            sx={{ width: "100%", pb: 2 }}
            id="outlined-size-small"
            name="patientName"
            defaultValue={user.displayName}
            onBlur={handleOnBlur}
            size="small"
          />
          <TextField
            sx={{ width: "100%", pb: 2 }}
            id="outlined-size-small"
            name="phone"
            placeholder="Phone Number"
            onBlur={handleOnBlur}
            size="small"
          />
          <TextField
            disabled
            sx={{ width: "100%", pb: 2 }}
            id="outlined-size-small"
            name="name"
            defaultValue={user.email}
            size="small"
          />
          <TextField
            disabled
            sx={{ width: "100%", pb: 2 }}
            id="outlined-size-small"
            defaultValue={date.toDateString()}
            size="small"
          />
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default BookingModal;
