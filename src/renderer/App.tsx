import { ThemeProvider, useTheme } from "./context/ThemeContext";

export function App() {
	/*const notify = () => {
		// @ts-ignore
		electron.notificationApi.notify("Toggle theme");
	};*/

	const { theme, setTheme } = useTheme();

	const test = () => {
		console.log(theme);
		setTheme(() => {
			return theme == "dark" ? "light" : "dark";
		});
	};

	return (
		<ThemeProvider>
			<button
				style={{ background: theme ? "#333" : "#ccc" }}
				onClick={test}
			>
				Toggle theme
			</button>
		</ThemeProvider>
	);
}
