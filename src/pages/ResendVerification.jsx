import React from "react";
import { Box, Button, Divider, Link as MLink, Typography } from "@mui/material";
import AuthLayout from "../ui/components/AuthLayout";

export default function ResendVerification() {
  return (
    <AuthLayout activeTab="signup">
      <Box sx={{ textAlign: 'center' }}>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', background: '#ffe6f5', m: '0 auto', mb: 2, display: 'grid', placeItems: 'center', fontSize: 28 }}>✉️</Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>Check your email</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          We just sent an email to <Typography component="span" sx={{ fontWeight: 700 }}>smith.johnson@outlook.com</Typography>
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>Open Outlook</Button>
        <Button variant="outlined" sx={{ mt: 1 }} fullWidth>
          I didn't receive any email,&nbsp;
          <MLink underline="none" sx={{ fontWeight: 700, cursor: 'pointer' }}>Resend</MLink>
        </Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
