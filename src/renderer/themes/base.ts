import { experimental_sx as sx, Theme, ThemeOptions } from "@mui/material";

export const BaseTheme: ThemeOptions = {
	shape: {
		borderRadius: 4,
	},
	typography: {
		fontFamily: "Poppins, Roboto",
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 600,
				},
			},
		},
		MuiPaper: {
			defaultProps: {
				elevation: 0,
				variant: "outlined",
			},
			styleOverrides: {
				root: sx((theme: Theme) => ({
					borderRadius: theme.shape.borderRadius,
				})),
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				"*": {
					boxSizing: "border-box",
				},
			},
		},
		MuiListItemButton: {
			styleOverrides: {
				root: sx((theme: Theme) => ({
					color: theme.palette.text.primary,
					borderRadius: theme.shape.borderRadius,
					"&.Mui-selected": {
						background: theme.palette.background.default,
						"& .MuiListItemIcon-root": {
							color: theme.palette.primary.main,
						},
						"& .MuiListItemText-root": {
							color: theme.palette.primary.main,
						},
						"&:hover": {
							background: theme.palette.background.default,
						},
					},
					"&:hover": {
						background: theme.palette.background.default,
						"& .MuiListItemIcon-root": {
							color: theme.palette.primary.main,
						},
						"& .MuiListItemText-root": {
							color: theme.palette.primary.main,
						},
					},
				})),
			},
		},
		MuiListItemIcon: {
			styleOverrides: {
				root: sx((theme: Theme) => ({
					color: theme.palette.text.primary,
				})),
			},
		},
		MuiMenuItem: {
			styleOverrides: {
				root: sx((theme: Theme) => ({
					"&:hover": {
						background: theme.palette.background.default,
					},
				})),
			},
		},
	},
};
