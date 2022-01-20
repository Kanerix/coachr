import type HomeIcon from "@mui/icons-material/Home";

export interface ISidenavCategoryProp {}

export interface ISidenavItemProps {
	name: string;
	Icon: typeof HomeIcon;
	to: string;
}
