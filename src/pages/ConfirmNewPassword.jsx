import React from "react";
import { Box, Button, Divider, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";

export default function ConfirmNewPassword() {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  return (
    <AuthLayout activeTab="login">
      <Box>
        <Box sx={{ width: 64, height: 64, borderRadius: '50%', background: '#ffe6f5', m: '0 auto', mb: 2, display: 'grid', placeItems: 'center', fontSize: 28 }}>🔑</Box>
        <Typography variant="h5" sx={{ fontWeight: 700, textAlign: 'center', mb: 2 }}>Reset Password</Typography>
        <TextField label="Email address" fullWidth defaultValue="smith.johnson@outlook.com" sx={{ mb: 2 }} />
        <TextField label="Enter code" fullWidth defaultValue="425-758" sx={{ mb: 2 }} />
        <TextField
          label="Enter new password"
          type={show1 ? 'text' : 'password'}
          fullWidth
          sx={{ mb: 2 }}
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
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Reset password</Button>
        <Button variant="outlined" component={Link} to="/login" fullWidth sx={{ mt: 1 }}>⟵ Return to login</Button>
        <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our <b>Terms of Service</b> and <b>Privacy Policy</b>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}
