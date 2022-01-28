import { createTheme, ThemeOptions } from '@mui/material'
import { BaseTheme } from './base'

const lightTheme: ThemeOptions = createTheme({
	...BaseTheme,
	palette: {
		mode: 'light',
		background: {
			paper: '#ffffff',
			default: '#f4f4f4',
		},
	},
})

export default lightTheme
