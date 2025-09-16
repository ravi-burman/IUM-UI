import React from "react";
import { Box, Paper, Tabs, Tab, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function AuthLayout({ children, activeTab = "signup", showTabs = true, paperProps }) {
  const tabIndex = activeTab === "login" ? 0 : 1;
  return (
    <Box
      sx={(t) => ({
        minHeight: "100vh",
        background: t.custom?.gradients?.hero,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 2, md: 6 },
      })}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 2, md: 6 },
          width: "100%",
          maxWidth: 1280,
        }}
      >
        <Paper
          elevation={6}
          sx={(t) => ({
            p: { xs: 3, md: 8 },
            borderRadius: 0,
            background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,247,251,0.95) 100%)",
            backdropFilter: "blur(6px)",
            overflow: "hidden",
            position: "relative",
            '&:after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)',
              pointerEvents: 'none',
              borderRadius: 0,
            },
          })}
        >
          <Typography variant="h5" color="text.secondary">
            Welcome to
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>
            TrueComp
          </Typography>
          <Typography variant="body2" sx={{ mt: 4, color: "text.secondary" }}>
            Over the coming months we will be integrating our new identity into our exceptional products.
          </Typography>
        </Paper>

  <Paper elevation={10} sx={(t) => ({ p: { xs: 3, md: 6 }, borderRadius: 0, overflow: 'hidden', position: 'relative' })} {...paperProps}>
          {showTabs && (
            <Tabs
              value={tabIndex}
              sx={{
                mb: 2,
                '& .MuiTabs-flexContainer': { justifyContent: 'center', gap: 3 },
                '& .MuiTab-root': { minWidth: 120 },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: 3,
                },
              }}
            >
              <Tab label="Login" component={RouterLink} to="/login" />
              <Tab label="Signup" component={RouterLink} to="/register" />
            </Tabs>
          )}
          {children}
        </Paper>
      </Box>
    </Box>
  );
}
