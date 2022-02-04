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
				<Grid item xs={12} sm={12} md={6}>
					<Item>sx=4</Item>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Item>xs=4</Item>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Item>xs=4</Item>
				</Grid>
			</Grid>
		</Box>
	)
}
