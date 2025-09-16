import React from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";

export default function ForgotPassword() {
  return (
    <AuthLayout activeTab="login">
      <Box>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', background: '#ffe6f5', m: '0 auto', mb: 2, display: 'grid', placeItems: 'center', fontSize: 28 }}>🔑</Box>
        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>Reset Password</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mb: 2 }}>
          Please enter your email address. A password reset code will be emailed to you.
        </Typography>
        <TextField label="Email address" fullWidth defaultValue="smith.johnson@outlook.com" />
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Send code</Button>
        <Button variant="outlined" component={Link} to="/login" fullWidth sx={{ mt: 1 }}>⟵ Return to login</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
