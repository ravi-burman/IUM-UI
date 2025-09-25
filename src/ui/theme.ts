import { createTheme } from '@mui/material/styles';

// Colors inspired by the provided screenshot (magenta/purple gradient UI)
export const brandPink = '#C40086';
const magenta = '#d1008f';
// const brandPink = '#C40086';
const magentaDark = '#a30071';
const purple = '#6a00a3';
const purpleDark = '#3b0b65';
const lightBg = '#f7f7fb';

const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: brandPink,
			light: '#ff4db8',
			dark: magentaDark,
			contrastText: '#ffffff',
		},
		secondary: {
			main: purple,
			dark: purpleDark,
			light: '#9e4dcc',
			contrastText: '#ffffff',
		},
		background: {
			default: lightBg,
			paper: '#ffffff',
		},
		text: {
			primary: '#1f2430',
			secondary: '#5b6270',
		},
	},
	shape: {
		borderRadius: 12,
	},
	typography: {
		fontFamily: 'Roboto, system-ui, -apple-system, Segoe UI, Arial, sans-serif',
		h4: { fontWeight: 700 },
		h5: { fontWeight: 600 },
		button: { textTransform: 'none', fontWeight: 600 },
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 10,
					boxShadow: '0 2px 6px rgba(209,0,143,0.25)',
				},
				containedPrimary: {
					backgroundImage: 'none',
					backgroundColor: brandPink,
					color: '#fff',
					'&:hover': {
						backgroundColor: magentaDark,
					},
				},
			},
		},
		MuiTextField: {
			defaultProps: {
				size: 'small',
				variant: 'outlined',
				fullWidth: true,
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: 10,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				rounded: {
					borderRadius: 14,
				},
			},
		},
		MuiTab: {
			styleOverrides: {
				root: {
					textTransform: 'none',
					fontWeight: 600,
					minHeight: 36,
				},
			},
		},
	},
});

// Attach custom tokens without requiring TypeScript module augmentation
(theme as any).custom = {
	gradients: {
		// hero: `linear-gradient(135deg, ${purpleDark} 0%, ${purple} 30%, ${magenta} 65%, #ff5bbd 100%)`,
		card: `linear-gradient(135deg, #ffffff 0%, #fff7fb 100%)`,
	},
	radius: { xl: 16 },
	brandPink,
};

export default theme;
