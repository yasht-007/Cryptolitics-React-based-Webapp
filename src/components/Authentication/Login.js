import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {};


const useStyles = makeStyles((theme) => ({
  multilineColor:{
    color:'black',
}
}));

const classes = useStyles();

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",   
        gap: "20px",
      }}
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
          className: classes.multilineColor
        }}
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        color="secondary"
        focused
        fullWidth
        InputProps={{
          className: classes.multilineColor
        }}
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleSubmit}
        style={{ backgroundColor: "#01bf71" }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;
