import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, TextField, Grid, InputAdornment, IconButton, FormControlLabel, Checkbox, Button, MenuItem, Typography, Divider } from "@mui/material";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./Register.module.css";
import { brandPink } from "../ui/theme";
import VerifyEmailScreen from "./VerifyEmailScreen";

export default function Register() {
  const [showPwd, setShowPwd] = useState(false);
  const [showPwd2, setShowPwd2] = useState(false);
  const [showVerifyScreen, setShowVerifyScreen] = useState(false);
  const AgencyTypes = ["Federal", "State", "County", "Municipal", "Other"];

  return (
    <AuthLayout activeTab="signup">
      {showVerifyScreen ? (
        <VerifyEmailScreen />
      ) : (
        <Box component="form" noValidate autoComplete="off" onSubmit={e => { e.preventDefault(); setShowVerifyScreen(true); }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <TextField
                label="Email Address"
                type="email"
                placeholder="name@agency.gov"
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
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
              <TextField label="First Name" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Last Name" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Job Title" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Phone" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }} />
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <TextField label="Agency Name" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }} />
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <TextField select label="Agency Type" defaultValue="Federal" fullWidth sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}>
                {AgencyTypes.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <TextField
                label="Password"
                type={showPwd ? "text" : "password"}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
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
            <Grid item xs={12} sx={{ width: '100%' }}>
              <TextField
                label="Confirm Password"
                type={showPwd2 ? "text" : "password"}
                fullWidth
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
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
            <Grid item xs={12} sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
              <FormControlLabel
                control={<Checkbox sx={{ p: 0, mr: 1 }} />}
                label={<Typography variant="body2">I agree to receive the newsletter and commercial information to my email.</Typography>}
                sx={{ alignItems: 'flex-start', width: '100%', m: 0 }}
              />
            </Grid>
            <Grid item xs={12} sx={{ width: '100%' }}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ height: 48 }}>
                Verify Email
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ my: 1}} />
          <Box className={styles.altActionBox} sx={{ textAlign: 'center', borderRadius: 0.5, background: '#fff', p: 1, border: '1px solid #d1d5db', fontSize: '1rem', fontWeight: 500, mb: 1 }}>
            Already have an account?
            <Link to="/login" style={{ color: brandPink, fontWeight: 600, marginLeft: 4, textDecoration: 'none' }}>Log in</Link>
          </Box>
          <Typography align="center" variant="caption" className={styles.caption}>
            By continuing to use our services, you acknowledge that you have both read and agree to our
            <Box component="span" className={styles.boldText}> Terms of Service </Box>
            and
            <Box component="span" className={styles.boldText}> Privacy Policy</Box>.
          </Typography>
        </Box>
      )}
    </AuthLayout>
  );
}

