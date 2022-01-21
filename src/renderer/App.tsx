import "@fontsource/fira-sans";
import "@fontsource/roboto";
import "simplebar/dist/simplebar.min.css";
import { Box, CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu";
import Topnav from "./components/Topnav";
import Sidenav, { drawerWidth } from "./components/Sidenav";
import { CustomThemeProvider } from "./context/ColorModeContext";
import { Dash } from "./pages/Dash";
import { Home } from "./pages/Home";
import { Goals } from "./pages/Goals";
import { Achievements } from "./pages/Achievments";
import { Reminders } from "./pages/Reminders";

export default function App() {
	/*const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Toggle theme");
	};*/

	return (
		<CustomThemeProvider>
			<HashRouter>
				<CssBaseline />
				<Menu />
				<Topnav />
				<Sidenav />
				<Box
					sx={(theme) => ({
						marginLeft: `${drawerWidth}px`,
						padding: theme.spacing(2),
					})}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/dash" element={<Dash />} />
						<Route path="/goals" element={<Goals />} />
						<Route
							path="/achievements"
							element={<Achievements />}
						/>
						<Route path="/reminders" element={<Reminders />} />
					</Routes>
				</Box>
			</HashRouter>
		</CustomThemeProvider>
	);
}
