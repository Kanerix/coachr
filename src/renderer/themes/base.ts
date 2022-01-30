import { experimental_sx, Theme, ThemeOptions } from "@mui/material"

export const BaseTheme: ThemeOptions = {
	shape: {
		borderRadius: 3,
	},
	typography: {
		fontFamily: "Poppins, Roboto",
	},
	components: {
		MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                }
            }
        },
		MuiPaper: {
			defaultProps: {
				elevation: 0,
				variant: "outlined",
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					boxSizing: 'border-box',
				},
			}
		},
 MuiListItemButton: {
            styleOverrides: {
                root: experimental_sx((theme: Theme) => ({
                    color: theme.palette.text.primary,
                    '&.Mui-selected': {
                        color: theme.palette.secondary.dark,
                        backgroundColor: theme.palette.secondary.light,
                        '&:hover': {
                            backgroundColor: theme.palette.secondary.light
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.dark,
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.dark,
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.dark,
                        }
                    }
                }))
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: experimental_sx((theme: Theme) => ({
                    color: theme.palette.text.secondary,
                }))
            }
        },
        MuiListItemText: {
            styleOverrides: experimental_sx((theme: Theme) => ({
                primary: {
                    color: theme.palette.text.secondary
                }
            })),
        },
	},
}
