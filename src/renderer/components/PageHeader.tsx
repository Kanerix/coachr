import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'

interface IPageHeaderProps {
	header: string;
}

export default function PageHeader({ header }: IPageHeaderProps) {
	return (
		<Box
			sx={(theme) => ({
				margin: () => theme.spacing(0, 0, 2, 0),
			})}
		>
			<Typography
				variant="h4"
				sx={(theme) => ({
					margin: theme.spacing(0, 2, 2, 2),
				})}
			>
				{header}
			</Typography>
			<Divider />
		</Box>
	)
}
