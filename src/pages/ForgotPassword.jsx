import React, { useState } from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AuthLayout from "../ui/components/AuthLayout";
import styles from "./ForgotPassword.module.css";
import logo from "../assets/images/key-icon.svg";
import { brandPink } from "../ui/theme";

export default function ForgotPassword() {
  const [showCodeField, setShowCodeField] = useState(false);
  return (
    <AuthLayout activeTab="login">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 2,
        }}
      >
        {/* Logo at top center */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <img
            src={logo}
            alt="TrueComp Logo"
            style={{ width: 64, height: 64 }}
          />
        </Box>
        <Typography variant="h5" align="center" sx={{ fontWeight: 700, mb: 1 }}>
          Reset Password
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 0.5 }}>
          Please enter your email address
        </Typography>
        <Typography
          variant="body2"
          align="center"
          sx={{ mb: 2, color: "text.secondary" }}
        >
          You will receive a 6-digit code to reset your password.
        </Typography>
        <TextField
          label="Email address"
          defaultValue="smith.johnson@outlook.com"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              height: "44px",
              borderRadius: "4px",
            },
          }}
        />
        {showCodeField ? (
          <>
            <TextField
              label="Enter code"
              fullWidth
              sx={{
                mb: 1,
                "& .MuiOutlinedInput-root": {
                  height: "44px",
                  borderRadius: "4px",
                },
              }}
            />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                mb: 2,
                pl: 0.5,
              }}
            >
              <span
                style={{
                  color: brandPink,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  fontSize: "1rem",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={() => alert("Resend code clicked!")}
              >
                <span style={{ fontSize: "18px", marginRight: 6 }}>
                  &#8635;
                </span>{" "}
                Resend code
              </span>
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mb: 2,
                height: 48,
                fontWeight: 600,
                backgroundColor: brandPink,
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(196,0,134,0.25)",
                "&:hover": { backgroundColor: "#a30071" },
              }}
            >
              Continue
            </Button>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mb: 2,
              height: 48,
              fontWeight: 600,
              backgroundColor: brandPink,
              borderRadius: "8px",
              boxShadow: "0 2px 6px rgba(196,0,134,0.25)",
              "&:hover": { backgroundColor: "#a30071" },
            }}
            onClick={() => setShowCodeField(true)}
          >
            Send code
          </Button>
        )}
        <Button
          variant="outlined"
          component={Link}
          to="/login"
          fullWidth
          sx={{
            mb: 1,
            height: 48,
            fontWeight: 600,
            borderRadius: "8px",
            borderColor: brandPink,
            color: brandPink,
            backgroundColor: "#fff",
            boxShadow: "0 2px 6px rgba(196,0,134,0.08)",
            textTransform: "none",
            "&:hover": { borderColor: "#a30071", backgroundColor: "#f5f5f5" },
          }}
        >
          ⟵ Return to login
        </Button>
        <Divider sx={{ my: 1 }} />
        <Typography
          align="center"
          variant="caption"
          className={styles.caption}
          sx={{ mt: 0.5 }}
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
    </AuthLayout>
  );
}
