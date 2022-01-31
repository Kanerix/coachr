import { createTheme, ThemeOptions } from "@mui/material";
import { BaseTheme } from "./base";

const lightTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "light",
		background: {
			paper: "#ffffff",
			default: "#f3f4f6",
		},
		primary: {
			light: "#2680eb",
			main: "#1473e6",
			dark: "#095aba",
			contrastText: "#000000",
		},
		secondary: {
			light: "#2d9d78",
			main: "#268e6c",
			dark: "#107154",
			contrastText: "#ffffff",
		},
	},
});

export default lightTheme;
