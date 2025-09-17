import React from "react";
import { Box, Button, Divider, Link as MLink, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./EnterCode.module.css";

export default function EnterCode() {
  return (
    <AuthLayout activeTab="login">
      <Box>
        <Box className={styles.centerIcon}>🔑</Box>
        <Typography variant="h5" className={styles.title}>Reset Password</Typography>
        <TextField label="Email address" fullWidth defaultValue="smith.johnson@outlook.com" className={styles.field} />
        <TextField label="Enter code" fullWidth className={styles.field} />
        <MLink className={styles.resendLink} underline="none" href="#">Resend code</MLink>
        <Button variant="contained" color="primary" fullWidth>Continue</Button>
        <Button variant="outlined" component={Link} to="/login" fullWidth sx={{ mt: 1 }}>⟵ Return to login</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
