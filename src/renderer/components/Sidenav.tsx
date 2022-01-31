import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	List,
	ListItemIcon,
	ListItemText,
	Drawer,
	Divider,
	ListItemButton,
	Paper,
	Avatar,
	Typography,
	IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";

import pages from "../pages/_app";
import { titleMenuHeight } from "./TitleMenu";

export const drawerWidth = 240;

export default function Sidenav() {
	const location = useLocation();

	const ListItemsArray = pages.filter((page) => page.nav);

	return (
		<Drawer
			variant="permanent"
			open={true}
			sx={(theme) => ({
				"& .MuiDrawer-paper": {
					width: `${drawerWidth}px`,
					mt: `${titleMenuHeight}px`,
					borderTop: `solid 1px ${theme.palette.divider}`,
					borderRadius: 0,
				},
			})}
		>
			<SimpleBar style={{ height: "100%" }}>
				<Paper
					variant="elevation"
					sx={(theme) => ({
						background: theme.palette.background.default,
						display: "flex",
						alignItems: "center",
						mx: 1,
						my: 2,
						py: 1,
					})}
				>
					<IconButton
						sx={{
							mx: 1,
						}}
					>
						<Avatar />
					</IconButton>

					<Box
						sx={{
							overflow: "hidden",
						}}
					>
						<Typography
							sx={{
								whiteSpace: "nowrap",
							}}
						>
							Kasper
						</Typography>
						<Typography
							fontSize="small"
							sx={(theme) => ({
								color: theme.palette.text.secondary,
								whiteSpace: "no-wrap",
							})}
						>
							medlem
						</Typography>
					</Box>
				</Paper>
				<Divider />
				<List
					disablePadding={true}
					sx={{
						px: 1,
						my: 1,
					}}
				>
					{ListItemsArray.map(({ name, icon, path }) => {
						const selected = location.pathname === path;

						return (
							<ListItemButton
								key={name}
								component={Link}
								to={path}
								sx={{
									my: 0.5,
								}}
								selected={selected}
							>
								<ListItemIcon
									sx={(theme) => ({
										minWidth: theme.spacing(5),
									})}
								>
									<FontAwesomeIcon icon={icon} />
								</ListItemIcon>
								<ListItemText
									sx={(theme) => ({
										color: selected
											? theme.palette.secondary.main
											: theme.palette.text.primary,
									})}
									primary={name}
								/>
							</ListItemButton>
						);
					})}
				</List>
			</SimpleBar>
		</Drawer>
	);
}
