import { Theme, ThemeProvider } from "@mui/material"
import { createContext, ReactNode, useContext, useMemo, useState } from "react"
import { IThemes, getMode } from "../themes/_theme"

export interface IColorModeContext {
	setColorMode: (newTheme: IThemes) => void
}

const ColorModeContext = createContext<IColorModeContext | undefined>(undefined)

export function useColorMode() {
	const context = useContext(ColorModeContext)

	if (context == undefined) {
		throw new Error(
			"useColorMode must be used inside a CustomThemeProvider"
		)
	}

	return context
}

interface IColorModeProviderProps {
	children: ReactNode
}

export function CustomThemeProvider({ children }: IColorModeProviderProps) {
	const [mode, setMode] = useState<IThemes>("dark")
	const colorMode = useMemo<IColorModeContext>(
		() => ({
			setColorMode: (newTheme: IThemes) => setMode(newTheme),
		}),
		[]
	)

	const theme = useMemo<Theme>(() => getMode(mode), [mode])

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	)
}
