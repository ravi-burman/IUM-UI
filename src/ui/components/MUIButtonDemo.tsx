import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function MUIButtonDemo() {
	return (
		<Stack direction="row" spacing={2}>
			<Button variant="contained" color="primary">Primary</Button>
			<Button variant="outlined" color="secondary">Secondary</Button>
		</Stack>
	);
}
