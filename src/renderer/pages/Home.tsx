import { Box, IconButton, useTheme } from "@mui/material";
import { useColorMode } from "../context/ColorModeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export function Home() {
	const theme = useTheme();
	const { setColorMode } = useColorMode();

	return (
		<Box
			sx={{
				display: "flex",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
				bgcolor: "background.default",
				color: "text.primary",
				borderRadius: 1,
				padding: 3,
			}}
		>
			{theme.palette.mode}
			<IconButton
				sx={{ ml: 1 }}
				onClick={() =>
					setColorMode(
						theme.palette.mode === "dark" ? "light" : "dark"
					)
				}
				color="inherit"
			>
				{theme.palette.mode === "dark" ? (
					<Brightness4Icon />
				) : (
					<Brightness7Icon />
				)}
			</IconButton>
		</Box>
	);
}
