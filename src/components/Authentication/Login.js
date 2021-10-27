import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { auth } from "../../Firebase";
import { CryptoState } from "../../CryptoContext";
import { signInWithEmailAndPassword} from "firebase/auth";


const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAlert } = CryptoState();


const useStyles = makeStyles((theme) => ({
  multilineColor:{
    color:'black',
}
}));

const handleSubmit = async () => {
  if (!email || !password) {
    setAlert({
      open: true,
      message: "Please fill all the Fields",
      type: "error",
    });
    return;
  }

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    setAlert({
      open: true,
      message: `Sign In Successful. Welcome ${result.user.email}`,
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
        color="success"
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
        color="success"
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
