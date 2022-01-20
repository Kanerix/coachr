import { Box } from "@mui/material";
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
		</Box>
	);
}
