import React from "react";
import { Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./ConfirmNewPassword.module.css";

export default function ConfirmNewPassword() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  return (
    <AuthLayout activeTab="login">
      <Box>
        <Box className={styles.iconCircle}>🔑</Box>
        <Typography variant="h5" className={styles.title}>Reset Password</Typography>
        <TextField label="Email address" fullWidth defaultValue="smith.johnson@outlook.com" className={styles.field} />
        <TextField label="Enter code" fullWidth defaultValue="425-758" className={styles.field} />
        <TextField
          label="Enter new password"
          type={show1 ? 'text' : 'password'}
          fullWidth
          className={styles.field}
          InputProps={{ endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShow1(s => !s)}>
                {show1 ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          )}}
        />
        <TextField
          label="Confirm new password"
          type={show2 ? 'text' : 'password'}
          fullWidth
          InputProps={{ endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShow2(s => !s)}>
                {show2 ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          )}}
        />
  <Button variant="contained" color="primary" fullWidth className={styles.primaryButton}>Reset password</Button>
  <Button variant="outlined" component={Link} to="/login" fullWidth className={styles.linkButton}>⟵ Return to login</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" className={styles.caption}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
