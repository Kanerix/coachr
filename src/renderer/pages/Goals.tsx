import { Box, Divider, Grid, List, ListItemButton, ListItemButton, Paper, Typography } from '@mui/material'

import PageHeader from '../components/PageHeader'

export default function Goals() {
	return (
		<Box>
			<PageHeader header="Goals" />
			<Grid container spacing={2} justifyContent="space-between">
				<Grid item xs={12} sm={12} md={6}>
					<Paper
						sx={{
							p: 2
						}}
					>
						<Typography fontSize={22} sx={{ px: 1 }}>
							Posture
						</Typography>
						<Divider />
						<List>
							<ListItemButton>
								test123
							</ListItemButton>
						</List>
						<Divider />
						<Box>
							test
						</Box>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	)
}
