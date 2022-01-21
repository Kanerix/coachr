import { Box } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import type { ISidenavItemProps } from "../types/pages";
import PageHeader from "../components/PageHeader";

export const RemindersSidenavProps: ISidenavItemProps = {
	name: "Reminders",
	Icon: CalendarTodayIcon,
	to: "/reminders",
};

export function Reminders() {
	return (
		<Box>
			<PageHeader header="Reminders" />
		</Box>
	);
}
