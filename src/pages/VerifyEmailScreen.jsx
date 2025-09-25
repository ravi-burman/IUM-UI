import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { brandPink } from "../ui/theme";
import logo from "../assets/images/sent-email-icon.svg";
import styles from "./Register.module.css";

export default function VerifyEmailScreen() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
      .toString()
      .padStart(2, "0");
    const s = (secs % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 4,
      }}
    >
      <img
        src={logo}
        alt="TrueComp Logo"
        style={{ width: 80, height: 80, marginBottom: 24 }}
      />
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Check your email
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 1 }}>
        We just sent an email to
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ color: brandPink, fontWeight: 600, mb: 1 }}
      >
        smith.johnson@outlook.com
      </Typography>
      <Typography variant="body2" align="center" sx={{ mb: 2 }}>
        Please verify your email using the link within 24 hours
      </Typography>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mb: 2, height: 48, fontWeight: 600 }}
      >
        Open Outlook
      </Button>
      <Box
        sx={{
          background: "#fff",
          borderRadius: 0.5,
          border: "1px solid #d1d5db",
          p: 1,
          textAlign: "center",
          fontSize: "1rem",
          fontWeight: 500,
          mb: 2,
          width: "100%",
        }}
      >
        {seconds > 0 ? (
          <>
            I didn't receive any email, Try again in{" "}
            <span style={{ color: brandPink }}>{formatTime(seconds)}</span>
          </>
        ) : (
          <>
            I didn't receive any email, Try again in{" "}
            <span
              style={{
                color: brandPink,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
              }}
            >
              Resend
            </span>
          </>
        )}
      </Box>
      <Typography
        align="center"
        variant="caption"
        className={styles.caption}
        sx={{ mt: 1 }}
      >
        By continuing to use our services, you acknowledge that you have both
        read and agree to our
        <Box component="span" className={styles.boldText}>
          {" "}
          Terms of Service{" "}
        </Box>
        and
        <Box component="span" className={styles.boldText}>
          {" "}
          Privacy Policy
        </Box>
        .
      </Typography>
    </Box>
  );
}
