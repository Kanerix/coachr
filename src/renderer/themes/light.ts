import { createTheme, ThemeOptions } from "@mui/material"
import { BaseTheme } from "./base"

const lightTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "light",
		background: {
			paper: "#ffffff",
		},
		primary: {
			light: "#e3f2fd",
			main: "#2196f3",
			dark: "#1e88e5",
		},
		secondary: {
			light: "#ede7f6",
			main: "#673ab7",
			dark: "#5e35b1",
		},
	},
})

export default lightTheme
