import { Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import type { ISidenavItemProps } from "../types/pages";
import PageHeader from "../components/PageHeader";

export const AchievementsSidenavProps: ISidenavItemProps = {
	name: "Achievements",
	Icon: EmojiEventsIcon,
	to: "/achievements",
};

export function Achievements() {
	return (
		<Box>
			<PageHeader header="Achivements" />
		</Box>
	);
}
