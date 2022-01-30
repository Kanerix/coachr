<<<<<<< HEAD
import "@fontsource/poppins"
import "@fontsource/palanquin-dark"
import "simplebar/dist/simplebar.min.css"
=======
import '@fontsource/fira-sans'
import '@fontsource/palanquin-dark'
import 'simplebar/dist/simplebar.min.css'
>>>>>>> master

import { Box, CssBaseline } from '@mui/material'
import { HashRouter, Route, Routes } from 'react-router-dom'

import TitleMenu from './components/TitleMenu'
import Topnav from './components/Topnav'
import Sidenav, { drawerWidth } from './components/Sidenav'
import { CustomThemeProvider } from './context/ColorModeContext'
import pages from './pages/_app'

export default function App() {
	return (
		<CustomThemeProvider>
			<HashRouter>
				<CssBaseline />
				<TitleMenu />
				<Topnav />
				<Sidenav />
				<Box
					sx={(theme) => ({
						ml: `${drawerWidth}px`,
						p: theme.spacing(2),
					})}
				>
					<Routes>
						{pages.map(({ path, component }, index) => (
							<Route
								key={index}
								path={path}
								element={component}
							/>
						))}
					</Routes>
				</Box>
			</HashRouter>
		</CustomThemeProvider>
	)
}
