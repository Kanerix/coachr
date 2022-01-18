import {
	ThemeProvider,
	useTheme,
	useThemeUpdate,
} from "./context/ThemeContext";

export function App() {
	/*const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Toggle theme");
	};*/

	const theme = useTheme();
	const themeUpdate = useThemeUpdate();

	return (
		<ThemeProvider>
			<button
				style={{ background: theme ? "#333" : "#ccc" }}
				onClick={themeUpdate}
			>
				Toggle theme
			</button>
		</ThemeProvider>
	);
}
