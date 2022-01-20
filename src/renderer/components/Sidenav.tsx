import {
	Toolbar,
	List,
	ListItemIcon,
	ListItemText,
	Drawer,
	Divider,
	ListItemButton,
	Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import type { ISidenavItemProps } from "../types/pages";
import { DashSidenavProps } from "../pages/Dash";
import { HomeSidenavProps } from "../pages/Home";
import PosturLogo from "../assets/PosturLogo";

export const drawerWidth = 200;

export default function Sidenav() {
	const SidenavItems: ISidenavItemProps[] = [
		HomeSidenavProps,
		DashSidenavProps,
	];

	return (
		<Drawer
			variant="permanent"
			open={true}
			sx={{
				"& .MuiDrawer-paper": {
					width: `${drawerWidth}px`,
				},
			}}
		>
			<SimpleBar style={{ height: "100%" }}>
				<Toolbar
					sx={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<PosturLogo
						fontSize="large"
						sx={(theme) => ({
							marginRight: theme.spacing(1),
						})}
					/>
					<Typography
						variant="h5"
						sx={(theme) => ({
							fontWeight: "500",
							paddingTop: theme.spacing(1),
						})}
					>
						Postur
					</Typography>
				</Toolbar>
				<Divider />
				<List
					disablePadding={true}
					sx={(theme) => ({
						paddingInline: `${theme.spacing(
							1
						)} calc(${theme.spacing(1)} + 7px)`,
					})}
				>
					{SidenavItems.map(({ name, to, Icon }) => (
						<ListItemButton
							key={name}
							component={Link}
							to={to}
							sx={(theme) => ({
								borderRadius: theme.shape.borderRadius,
								marginBlock: theme.spacing(1),
								paddingBlock: theme.spacing(1),
							})}
						>
							<ListItemIcon
								sx={(theme) => ({
									minWidth: theme.spacing(5),
								})}
							>
								<Icon />
							</ListItemIcon>
							<ListItemText primary={name} />
						</ListItemButton>
					))}
				</List>
			</SimpleBar>
		</Drawer>
	);
}
