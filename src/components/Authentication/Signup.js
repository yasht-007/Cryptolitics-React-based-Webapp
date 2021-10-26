import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { CryptoState } from "../../CryptoContext";
import {auth} from "../../Firebase";

const Signup = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { setAlert } = CryptoState();

  const useStyles = makeStyles((theme) => ({
    multilineColor: {
      color: "black",
    },
  }));

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error",
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: "success",
      });

      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error",
      });
      return;
    }
  };

  const classes = useStyles();


  return (
    <Box
      padding={3}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        focused
        color="secondary"
        InputProps={{
          className: classes.multilineColor,
        }}
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        color="secondary"
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        focused
        InputProps={{
          className: classes.multilineColor,
        }}
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        color="secondary"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
        focused
        InputProps={{
          className: classes.multilineColor,
        }}
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "#01bf71" }}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Signup;
