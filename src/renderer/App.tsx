import "@fontsource/poppins"
import "@fontsource/palanquin-dark"
import "simplebar/dist/simplebar.min.css"

import { Box, CssBaseline } from "@mui/material"
import { HashRouter, Route, Routes } from "react-router-dom"

import TitleMenu from "./components/TitleMenu"
import Topnav from "./components/Topnav"
import Sidenav, { DrawerWidth } from "./components/Sidenav"
import { CustomThemeProvider } from "./context/ColorModeContext"
import pages from "./pages/_app"

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
						marginLeft: `${DrawerWidth}px`,
						padding: theme.spacing(2),
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
