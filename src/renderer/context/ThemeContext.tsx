import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";
//import themes from "../themes";

const ThemeContext = createContext<boolean | undefined>(undefined);
const ThemeUpdateContext = createContext<(() => void) | undefined>(undefined);

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used inside a ThemeProvider");
	}

	return context;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<boolean>(true);

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeUpdateContext.Provider value={changeTheme}>
				{children}
				{console.log(darkTheme)}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
}
