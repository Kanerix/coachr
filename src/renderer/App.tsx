import "@fontsource/fira-sans";
import "simplebar/dist/simplebar.min.css";
import { Box, CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";

import Sidenav, { drawerWidth } from "./components/Sidenav";
import Topnav from "./components/Topnav";
import { CustomThemeProvider } from "./context/ColorModeContext";
import { Dash } from "./pages/Dash";
import { Home } from "./pages/Home";

export function App() {
	/*const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Toggle theme");
	};*/

	return (
		<CustomThemeProvider>
			<HashRouter>
				<CssBaseline />
				<Topnav />
				<Sidenav />
				<Box sx={{ marginLeft: `${drawerWidth}px` }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dash" element={<Dash />} />
					</Routes>
				</Box>
			</HashRouter>
		</CustomThemeProvider>
	);
}
