import { Box, Grid, Paper, styled } from '@mui/material'
import ReactApexChart from 'react-apexcharts'

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
					<Item>
						<ReactApexChart
							options={{
								chart: {
									width: 380,
									type: 'donut',
								},
								labels: ['Comedy'],
								legend: {
									show: false,
								},
								stroke: {
									show: false,
								},
								states: {
									active: {
										filter: {
											type: 'none',
											value: 0.0,
										},
									},
								},
							}}
							series={[44, 55, 13, 33]}
							type="donut"
							width={380}
						/>
					</Item>
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
