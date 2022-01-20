import { createTheme, ThemeOptions } from "@mui/material";
import BaseTheme from "./_base";

const lightTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "light",
	},
});

export default lightTheme;
