import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import AuthLayout from "../ui/components/AuthLayout";

export default function VerifiedPendingApproval() {
  return (
    <AuthLayout activeTab="signup">
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', background: '#ffe6f5', m: '0 auto', mb: 2, display: 'grid', placeItems: 'center', fontSize: 28 }}>✅</Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Email verified successfully!</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Your email has been verified, now just wait for the admin approval
        </Typography>
        <Button variant="outlined" sx={{ mt: 2 }} fullWidth>Notify admin in 23h 59m</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
