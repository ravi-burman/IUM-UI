import React, { PropsWithChildren } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const UIProvider: React.FC<PropsWithChildren> = ({ children }) => (
	<StyledEngineProvider injectFirst>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	</StyledEngineProvider>
);

export default UIProvider;
