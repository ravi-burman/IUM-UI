import React from "react";
import { Link } from "react-router-dom";
import { brandPink } from "../ui/theme";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./Login.module.css";

export default function Login() {
  const [showPwd, setShowPwd] = React.useState(false);

  return (
    <AuthLayout activeTab="login">
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={styles.form}
      >
        <TextField
          label="Email Address"
          type="email"
          className={styles.textField}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
        />
        <TextField
          label="Password"
          type={showPwd ? "text" : "password"}
          className={styles.textField}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px' } }}
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
        <div className={styles.rememberRow}>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
          <Typography
            variant="body2"
            component={Link}
            to="/forgot"
            className={styles.link}
          >
            Forgot Password?
          </Typography>
        </div>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: brandPink,
            color: '#fff',
            fontWeight: 600,
            boxShadow: '0 2px 6px rgba(196,0,134,0.25)',
            borderRadius: '8px',
            height: 48,
            '&:hover': { backgroundColor: '#a30071' },
          }}
        >
          Login
        </Button>
        <div className={styles.altActionBox}>
          Don’t have an account yet?
          <Link to="/register" style={{ color: brandPink, fontWeight: 600 }}>Sign up</Link>
        </div>
        <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 2, color: 'text.secondary' }}>
          By continuing to use our services, you acknowledge that you have both read and agree to our
          <span style={{ fontWeight: 600, color: '#222' }}> Terms of Service </span>
          and
          <span style={{ fontWeight: 600, color: '#222' }}> Privacy Policy</span>.
        </Typography>
      </Box>
    </AuthLayout>
  );
}