import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Welcome to IUM UI
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" component={Link} to="/login">Login</Button>
        <Button variant="contained" component={Link} to="/register">Register</Button>
      </Stack>
    </Box>
  );
}
