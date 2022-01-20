import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import type { ISidenavItemProps } from "../types/pages";
import PageHeader from "../components/PageHeader";

export const HomeSidenavProps: ISidenavItemProps = {
	name: "Home",
	Icon: HomeIcon,
	to: "/",
};

export function Home() {
	return (
		<Box>
			<PageHeader header="Home" />
		</Box>
	);
}
