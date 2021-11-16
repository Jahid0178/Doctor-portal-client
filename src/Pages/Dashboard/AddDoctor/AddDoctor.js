import { Button, Input, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);

    fetch("http://localhost:4000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess("Doctors Added Successfully");
          console.log("doctor added successfully");
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div>
      <Typography variant="h5">Add A Doctor</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ width: "50%", mb: 1 }}
          label="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <TextField
          sx={{ width: "50%", mb: 1 }}
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required
          variant="standard"
        />
        <br />
        <Input
          sx={{ mb: 1 }}
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button variant="contained" type="submit">
          Add Doctor
        </Button>
      </form>
      {success && (
        <p style={{ color: "green", textAlign: "center" }}>{success}</p>
      )}
    </div>
  );
};

export default AddDoctor;
