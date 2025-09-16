import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "../ui/components/AuthLayout";

export default function Login() {
  const [showPwd, setShowPwd] = React.useState(false);

  return (
    <AuthLayout activeTab="login">
      <Box component="form" noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Email Address" type="email" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              type={showPwd ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setShowPwd((s) => !s)}>
                      {showPwd ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <FormControlLabel control={<Checkbox />} label="Remember Me" />
            <Typography variant="body2" component={Link} to="/forgot" style={{ textDecoration: 'none' }}>
              Forgot Password?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>Login</Button>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2 }} />
        <Typography align="center" variant="body2">
          Don’t have an account yet? <Link to="/register">Sign up</Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
}

