import { Box, Grid, Paper, styled } from '@mui/material'

import PageHeader from '../components/PageHeader'

const Item = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(2),
}))

export default function Dash() {
	return (
		<Box>
			<PageHeader header="Dashboard" />
			<Grid container spacing={2} justifyContent="space-between">
				<Grid item xs={4}>
					<Item>sx=4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={4}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={8}>
					<Item>xs=8</Item>
				</Grid>
			</Grid>
		</Box>
	)
}
