import { CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import { CustomThemeProvider } from "./context/ColorModeContext";
import { Home } from "./pages/Home";

export function App() {
	/*const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Toggle theme");
	};*/

	return (
		<CustomThemeProvider>
			<CssBaseline />
			<Topnav />
			<Sidenav />
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</HashRouter>
		</CustomThemeProvider>
	);
}
