import { experimental_sx as sx, Theme, ThemeOptions } from "@mui/material"

export const BaseTheme: ThemeOptions = {
	shape: {
		borderRadius: 3,
	},
	typography: {
		fontFamily: "Fira Sans, Roboto",
	},
	components: {
		MuiListItemButton: {
			styleOverrides: {
				root: sx(( theme: Theme ) => ({
					"&.Mui-selected": {
						background: theme.palette.divider,
					},
					"&.Mui-selected:hover": {
						background: theme.palette.divider,
					},
				})),
			}
		},
		MuiPaper: {
			defaultProps: {
				variant: "outlined",
			},
		},
	},
}
