import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <Box className={styles.root}>
      <Typography variant="h4" className={styles.title}>
        Welcome to IUM UI
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button variant="outlined" component={Link} to="/login">Login</Button>
        <Button variant="contained" component={Link} to="/register">Register</Button>
      </Stack>
    </Box>
  );
}
