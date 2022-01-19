import { Theme, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import getMode, { IThemes } from "../themes";

export interface ISetColorMode {
	setColorMode: (newTheme: IThemes) => void;
}

const ColorModeContext = createContext<ISetColorMode | undefined>(undefined);

export function useColorMode() {
	const context = useContext(ColorModeContext);

	if (context == undefined) {
		throw new Error(
			"useColorMode must be used inside a CustomThemeProvider"
		);
	}

	return context;
}

interface IColorModeProviderProps {
	children: ReactNode;
}

export function CustomThemeProvider({ children }: IColorModeProviderProps) {
	const [mode, setMode] = useState<IThemes>("dark");
	const colorMode = useMemo<ISetColorMode>(
		() => ({
			setColorMode: (newTheme: IThemes) => {
				console.log(newTheme);
				setMode(newTheme);
			},
		}),
		[]
	);

	const theme = useMemo<Theme>(() => getMode(mode), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
