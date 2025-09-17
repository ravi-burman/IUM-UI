import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./VerifiedPendingApproval.module.css";

export default function VerifiedPendingApproval() {
  return (
    <AuthLayout activeTab="signup">
      <Box className={styles.center}>
        <Box className={styles.centerIcon}>✅</Box>
        <Typography variant="h5" className={styles.title}>Email verified successfully!</Typography>
        <Typography variant="body2" className={styles.caption}>
          Your email has been verified, now just wait for the admin approval
        </Typography>
        <Button variant="outlined" className={styles.primaryButton} fullWidth>Notify admin in 23h 59m</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" className={styles.caption}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
