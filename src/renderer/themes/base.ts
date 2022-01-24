import type { ThemeOptions } from "@mui/material"

export const BaseTheme: ThemeOptions = {
	shape: {
		borderRadius: 3.5,
	},
	typography: {
		fontFamily: "Fira Sans, Roboto",
	},
	components: {
		MuiPaper: {
			defaultProps: {
				variant: "outlined",
			},
		},
	},
}
