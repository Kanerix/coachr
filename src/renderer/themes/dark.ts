import { createTheme, ThemeOptions } from "@mui/material";
import BaseTheme from "./_base";

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: "dark",
	},
});

export default darkTheme;
