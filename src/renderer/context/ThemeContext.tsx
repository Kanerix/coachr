import { createContext, useContext, useState } from "react";

const ThemeContext = createContext<boolean>(true);
const ThemeUpdateContext = createContext<any>(null);

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

interface ThemeProviderProps {
	children: JSX.Element;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [darkTheme, setDarkTheme] = useState(true);

	function changeTheme() {
		setDarkTheme((prevDarkTheme) => !prevDarkTheme);
	}

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={changeTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
