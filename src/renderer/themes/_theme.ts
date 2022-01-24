import { createTheme, Theme } from "@mui/material"

import darkMode from "./dark"
import lightMode from "./light"

export type IThemes = "dark" | "light"

export function getMode(theme: IThemes): Theme {
	switch (theme) {
		case "dark":
			return createTheme(darkMode)

		case "light":
			return createTheme(lightMode)
	}
}
