import { createTheme, ThemeOptions } from '@mui/material'
import { BaseTheme } from './base'

const darkTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: 'dark',
		background: {
			paper: '#0a0b0d',
			default: '#111216',
		},
		primary: {
			light: '#2680eb',
			main: '#1473e6',
			dark: '#095aba',
			contrastText: '#000000'
		},
		secondary: {
			light: '#2d9d78',
			main: '#268e6c',
			dark: '#107154',
			contrastText: '#ffffff'
		},
	},
})

export default darkTheme
