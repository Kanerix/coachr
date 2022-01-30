import { createTheme, ThemeOptions } from '@mui/material'
import { BaseTheme } from './base'

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: 'dark',
		background: {
<<<<<<< HEAD
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
=======
			paper: '#111936',
			default: '#1a223f',
		},
		primary: {
			light: '#e3f2fd',
			main: '#2196f3',
			dark: '#1e88e5',
		},
		secondary: {
			light: '#d1c4e9',
			main: '#7c4dff',
			dark: '#651fff',
>>>>>>> master
		},
	},
})

export default darkTheme
