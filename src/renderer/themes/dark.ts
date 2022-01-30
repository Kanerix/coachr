import { createTheme, ThemeOptions } from '@mui/material'
import { BaseTheme } from './base'

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: 'dark',
		background: {
			paper: "#111936",
			default: "#1a223f",
		},
		primary: {
			light: "#e3f2fd",
			main: "#2196f3",
			dark: "#1e88e5",
		},
		secondary: {
			light: "#d1c4e9",
			main: "#7c4dff",
			dark: "#651fff",
		},
	},
})

export default darkTheme
