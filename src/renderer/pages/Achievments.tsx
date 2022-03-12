import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'

import AchievementBar from '../components/AchievementBar'
import PageHeader from '../components/PageHeader'
import type { Achievement } from '../@types/achievement'

export default function Achievements() {
	const [achievementData, _] = useState<Achievement[]>([
		{
			name: 'Complete 20 goals',
			goal: 20,
			progress: 13,
		},
		{
			name: 'Use app for 2 weeks',
			goal: 14,
			progress: 3,
		},
		{
			name: 'Set 5 reminders',
			goal: 5,
			progress: 5,
		},
	])

	return (
		<Box>
			<PageHeader header='Achivements' />
			<Grid container spacing={2} justifyContent='space-between'>
				{achievementData.map((item, idx) => (
					<Grid item xs={12}>
						<Paper
							sx={{
								p: 2,
							}}
						>
							<Box key={idx}>
								<AchievementBar achievement={item} />
							</Box>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}
