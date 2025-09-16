import React from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Grid, InputAdornment, IconButton, FormControlLabel, Checkbox, Button, MenuItem, Typography, Divider } from "@mui/material";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";
import AuthLayout from "../ui/components/AuthLayout";

export default function Register() {
  const [showPwd, setShowPwd] = React.useState(false);
  const [showPwd2, setShowPwd2] = React.useState(false);

  const AgencyTypes = ["Federal", "State", "County", "Municipal", "Other"];

  return (
    <AuthLayout activeTab="signup">
      <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    type="email"
                    placeholder="name@agency.gov"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email fontSize="small" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="First Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Last Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Job Title" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Phone" />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Agency Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField select label="Agency Type" defaultValue="Federal">
                    {AgencyTypes.map((t) => (
                      <MenuItem key={t} value={t}>
                        {t}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    type={showPwd ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPwd((s) => !s)} edge="end">
                            {showPwd ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    type={showPwd2 ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={() => setShowPwd2((s) => !s)} edge="end">
                            {showPwd2 ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I permit to send these details for account verification."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                    Verify Email
                  </Button>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />
              <Typography align="center" variant="body2">
                Already have an account? <Link to="/login">Log in</Link>
              </Typography>
              <Typography align="center" variant="caption" sx={{ color: 'text.secondary', mt: 1, display: 'block' }}>
                By continuing to use our services, you acknowledge that you have both read and agree to our
                <Box component="span" sx={{ fontWeight: 600 }}> Terms of Service </Box>
                and
                <Box component="span" sx={{ fontWeight: 600 }}> Privacy Policy</Box>.
              </Typography>
            </Box>
    </AuthLayout>
  );
}

