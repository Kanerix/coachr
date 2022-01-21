import { createTheme, ThemeOptions } from "@mui/material";
import BaseTheme from "./_base";

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "dark",
		background: {
			paper: "#111827",
			default: "#0b0f19",
		},
	},
});

export default darkTheme;
