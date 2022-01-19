import {
	createContext,
	Dispatch,
	ReactNode,
	useContext,
	useState,
} from "react";

type Themes = "dark" | "light";

interface IThemeContext {
	theme: Themes;
	setTheme: Dispatch<React.SetStateAction<Themes>>;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export function useTheme() {
	const context = useContext(ThemeContext);

	if (context == undefined) {
		throw new Error("useTheme must be used inside a ThemeProvider");
	}

	return context;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
	const [theme, setTheme] = useState<Themes>("dark");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
