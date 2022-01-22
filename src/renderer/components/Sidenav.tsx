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
import { Link, useLocation } from "react-router-dom";
import SimpleBar from "simplebar-react";

import type { ISidenavItemProps } from "../types/pages";
import { DashSidenavProps } from "../pages/Dash";
import { HomeSidenavProps } from "../pages/Home";
import CoachrLogo from "../assets/CoachrLogo";
import { GoalsSidenavProps } from "../pages/Goals";
import { AchievementsSidenavProps } from "../pages/Achievments";
import { RemindersSidenavProps } from "../pages/Reminders";
import { MenuHeight } from "./Menu";

export const DrawerWidth = 200;

export default function Sidenav() {
	const location = useLocation();

	const SidenavItems: ISidenavItemProps[] = [
		HomeSidenavProps,
		DashSidenavProps,
		GoalsSidenavProps,
		AchievementsSidenavProps,
		RemindersSidenavProps,
	];

	return (
		<Drawer
			variant="persistent"
			open={true}
			sx={(theme) => ({
				"& .MuiDrawer-paper": {
					width: `${DrawerWidth}px`,
					marginTop: `${MenuHeight}px`,
					borderTop: `solid 1px ${theme.palette.divider}`,
				},
			})}
		>
			<SimpleBar style={{ height: "100%" }}>
				<Toolbar
					sx={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CoachrLogo
						fontSize="large"
						sx={(theme) => ({
							marginRight: theme.spacing(1),
						})}
					/>
					<Typography
						variant="h5"
						sx={(theme) => ({
							fontFamily: " 'Orbitron', sans-serif",
							fontWeight: "500",
							paddingTop: theme.spacing(1),
						})}
					>
						Coachr
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
							selected={location.pathname == to}
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
