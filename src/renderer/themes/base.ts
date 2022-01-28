import { experimental_sx as sx, Theme, ThemeOptions } from '@mui/material'

export const BaseTheme: ThemeOptions = {
	shape: {
		borderRadius: 3,
	},
	typography: {
		fontFamily: 'Fira Sans, Roboto',
	},
	components: {
		MuiListItemButton: {
			styleOverrides: {
				root: sx(( theme: Theme ) => ({
					'&.Mui-selected .MuiListItemIcon-root': {
						color: theme.palette.primary.main,
					},
					'&.Mui-selected .MuiListItemText-primary': {
						color: theme.palette.primary.main,
					}
				})),
			}
		},
		MuiPaper: {
			defaultProps: {
				variant: 'outlined',
			},
		},
	},
}
