import React, { PropsWithChildren } from 'react';
import { Box, Paper, Tabs, Tab, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link as RouterLink } from 'react-router-dom';

type Props = PropsWithChildren<{
  activeTab?: 'login' | 'signup';
  showTabs?: boolean;
  paperProps?: React.ComponentProps<typeof Paper>;
}>;

const AuthLayout: React.FC<Props> = ({ children, activeTab = 'signup', showTabs = true, paperProps }) => {
  const tabIndex = activeTab === 'login' ? 0 : 1;
  return (
    <Box sx={(t) => ({
      minHeight: '100vh',
      background: (t as any).custom?.gradients.hero,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: { xs: 2, md: 4 },
    })}
    >
      <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
        <Grid xs={12} md={6}>
          <Paper elevation={6} sx={(t) => ({
            p: { xs: 3, md: 6 },
            borderRadius: (t as any).custom?.radius.xl,
            background: 'rgba(255,255,255,0.92)',
            backdropFilter: 'blur(4px)',
          })}
          >
            <Typography variant="h5" color="text.secondary">Welcome to</Typography>
            <Typography variant="h3" sx={{ fontWeight: 800, mt: 1 }}>TrueComp</Typography>
            <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
              Over the coming months we will be integrating our new identity into our exceptional products.
            </Typography>
          </Paper>
        </Grid>

        <Grid xs={12} md={6}>
          <Paper elevation={8} sx={(t) => ({ p: 3, borderRadius: (t as any).custom?.radius.xl })} {...paperProps}>
            {showTabs && (
              <Tabs value={tabIndex} sx={{ mb: 2 }}>
                <Tab label="Login" component={RouterLink} to="/login" />
                <Tab label="Signup" component={RouterLink} to="/register" />
              </Tabs>
            )}
            {children}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AuthLayout;
