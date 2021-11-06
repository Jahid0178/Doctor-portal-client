import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import Alert from "@mui/material/Alert";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("http://localhost:4000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
        console.log(data);
      });
  };
  return (
    <div>
      <h2>Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <Box sx={{ textAlign: "center" }}>
          <TextField
            sx={{ width: "50%" }}
            label="Email"
            onBlur={handleOnBlur}
            type="email"
            variant="standard"
          />
          <br />
          <Button sx={{ mt: 2 }} variant="contained" type="submit">
            Make Admin
          </Button>
        </Box>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
