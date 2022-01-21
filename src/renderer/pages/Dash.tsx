import { Box, Grid, Paper } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

import type { ISidenavItemProps } from "../types/pages";
import PageHeader from "../components/PageHeader";

export const DashSidenavProps: ISidenavItemProps = {
	name: "Dashboard",
	Icon: DashboardIcon,
	to: "/dash",
};

export function Dash() {
	return (
		<Box>
			<PageHeader header="Dashboard" />
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Paper variant="outlined">xs=8</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined">xs=4</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper variant="outlined">xs=4</Paper>
				</Grid>
				<Grid item xs={8}>
					<Paper variant="outlined">xs=8</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}
