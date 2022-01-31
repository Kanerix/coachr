import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	useTheme,
	Tooltip,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { drawerWidth } from "./Sidenav";
import { useColorMode } from "../context/ColorModeContext";
import NotificationMenu from "./NotificationMenu";

export default function Topnav() {
	const theme = useTheme();
	const { setColorMode } = useColorMode();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				elevation={0}
				position="relative"
				sx={(theme) => ({
					width: `calc(100% - ${drawerWidth}px)`,
					marginLeft: `${drawerWidth}px`,
					background: theme.palette.background.paper,
					border: "none",
					borderBlock: `solid 1px ${theme.palette.divider}`,
					borderRadius: 0,
				})}
			>
				<Toolbar>
					<Box sx={{ flex: 1 }} />
					<NotificationMenu />
					<Tooltip title="Themes" arrow>
						<IconButton
							sx={{
								m: 0.5,
								width: 40,
								height: 40,
							}}
							onClick={() =>
								setColorMode(
									theme.palette.mode === "dark"
										? "light"
										: "dark"
								)
							}
						>
							{theme.palette.mode === "dark" ? (
								<Brightness4Icon />
							) : (
								<Brightness7Icon />
							)}
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
