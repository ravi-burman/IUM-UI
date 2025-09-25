import React from "react";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { brandPink } from "../theme";
import welcomeBg2 from "../../assets/images/logo-water-mark.svg";
import logo from "../../assets/images/TrueComp_Logo.svg";

export default function AuthLayout({
  children,
  activeTab = "signup",
  showTabs = true,
  paperProps,
}) {
  const tabIndex = activeTab === "login" ? 0 : 1;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Welcome Box */}
      <Box
        sx={{
          width: "990px",
          height: "530px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 20px rgba(241, 233, 233, 0.1)",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 6,
          gap: 2,
          "&:before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.25)",
            zIndex: 1,
            borderRadius: "8px",
            pointerEvents: "none",
          },
          "& > *": { position: "relative", zIndex: 2 },
          "&:after": {
            content: '""',
            position: "absolute",
            inset: 0,
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
            pointerEvents: "none",
            borderRadius: "8px",
          },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: '400px', mr: 4 }}>
          <Box sx={{ position: 'relative', width: '400px', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img
              src={welcomeBg2}
              alt="Welcome Logo"
              style={{
                height: "400px",
                width: "400px",
                objectFit: "contain"
              }}
            />
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
              zIndex: 2
            }}>
              <Typography variant="h5" color="text.secondary" sx={{ textAlign: "center", mb: 2, pointerEvents: 'auto' }}>
                  Welcome to
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2, pointerEvents: 'auto' }}>
                  <img src={logo} alt="TrueComp Logo" style={{ width: 230, height: 120, objectFit: 'contain' }} />
              </Box>
              <Typography
                variant="body2"
                sx={{ mt: 2, color: "text.secondary", maxWidth: "80%", textAlign: "center", pointerEvents: 'auto' }}
              >
                Over the coming months we will be integrating our new identity into our exceptional products.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Login Box - Overlapping */}
        <Paper
          elevation={10}
          sx={{
            width: "480px",
            height: "720px",
            position: "absolute",
            top: "50%",
            right: "0px",
            transform: "translateY(-50%)",
            opacity: 1,
            gap: "20px",
            borderRadius: "8px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            zIndex: 2,
          }}
          {...paperProps}
        >
          {showTabs && (
            <div style={{
              display: 'inline-block',
              width: '148px',
              height: '46px',
              background: '#F5F5F5',
              borderRadius: '4px',
              border: '0.5px solid #e5e5e5',
              padding: 0,
              margin: '0 auto',
              boxSizing: 'border-box',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
            }}>
              <Tabs
                value={tabIndex}
                sx={{
                  minHeight: '32px',
                  p: '4px 6px',
                  '& .MuiTabs-flexContainer': {
                    justifyContent: 'center',
                    gap: '8px',
                  },
                  '& .MuiTab-root': {
                    minWidth: '64px',
                    height: '32px',
                    color: brandPink,
                    fontWeight: 600,
                    borderRadius: '4px',
                    padding: '4px 6px',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    transition: 'background 0.2s',
                  },
                  '& .Mui-selected': {
                    color: '#fff !important',
                    backgroundColor: brandPink,
                  },
                  '& .MuiTabs-indicator': {
                    height: '32px',
                    borderRadius: '4px',
                    backgroundColor: brandPink,
                    top: 0,
                    zIndex: 0,
                  },
                }}
              >
                <Tab label="Login" component={RouterLink} to="/login" />
                <Tab label="Signup" component={RouterLink} to="/register" />
              </Tabs>
            </div>
          )}
          <Box sx={{ mt: 0 }}>
            {children}
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
