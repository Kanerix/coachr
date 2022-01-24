import { createTheme, ThemeOptions } from "@mui/material"
import { BaseTheme } from "./base"

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "dark",
		background: {
			paper: "#111827",
			default: "#0b0f19",
		},
		primary: {
			dark: "#2f3eb1",
			main: "#4655ce",
			light: "#6e7ad8",
		},
		secondary: {
			dark: "#0b815a",
			main: "#10b981",
			light: "#3fc79a",
		},
	},
})

export default darkTheme
