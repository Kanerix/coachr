import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface IPageHeaderProps {
	header: string;
	margin?: boolean;
}

export default function PageHeader({
	header,
	margin = true,
}: IPageHeaderProps) {
	return (
		<Box
			sx={(theme) => ({
				margin: () => (margin ? theme.spacing(2) : "0px"),
			})}
		>
			<Typography
				variant="h4"
				sx={(theme) => ({
					margin: theme.spacing(2),
				})}
			>
				{header}
			</Typography>
			<Divider />
		</Box>
	);
}
