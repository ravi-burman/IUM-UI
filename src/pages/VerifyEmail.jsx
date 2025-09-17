import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./VerifyEmail.module.css";

export default function VerifyEmail() {
  return (
    <AuthLayout activeTab="signup" showTabs={false}>
      <Box className={styles.center}>
        <Box className={styles.centerIcon}>✉️</Box>
        <Typography variant="h5" className={styles.title}>Check your email</Typography>
        <Typography variant="body2" className={styles.caption}>
          We just sent an email to <Typography component="span" sx={{ fontWeight: 700 }}>smith.johnson@outlook.com</Typography><br/>
          Please verify your email using the link within 24 hours
        </Typography>
        <Button variant="contained" color="primary" className={styles.primaryButton} fullWidth>Open Outlook</Button>
        <Button variant="outlined" className={styles.linkButton} fullWidth>I didn't receive any email, Try again in 09:59</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" className={styles.caption}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
