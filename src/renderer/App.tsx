import { CssBaseline } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
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
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</HashRouter>
		</CustomThemeProvider>
	);
}
