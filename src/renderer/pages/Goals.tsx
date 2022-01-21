import { Box } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";

import type { ISidenavItemProps } from "../types/pages";
import PageHeader from "../components/PageHeader";

export const GoalsSidenavProps: ISidenavItemProps = {
	name: "Goals",
	Icon: FlagIcon,
	to: "/goals",
};

export function Goals() {
	return (
		<Box>
			<PageHeader header="Goals" />
		</Box>
	);
}
