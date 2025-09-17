import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./ForgotPassword.module.css";

export default function ForgotPassword() {
  return (
    <AuthLayout activeTab="login">
      <Box>
        <Box className={styles.centerIcon}>🔑</Box>
        <Typography variant="h5" className={styles.title}>Reset Password</Typography>
        <Typography variant="body2" className={styles.subtitle}>
          Please enter your email address. A password reset code will be emailed to you.
        </Typography>
        <TextField label="Email address" fullWidth defaultValue="smith.johnson@outlook.com" />
        <Button variant="contained" color="primary" fullWidth className={styles.primaryButton}>Send code</Button>
        <Button variant="outlined" component={Link} to="/login" fullWidth className={styles.linkButton}>⟵ Return to login</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" className={styles.caption}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
