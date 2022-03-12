import { Box, LinearProgress, Typography } from '@mui/material'
import type { Achievement } from '../@types/achievement'

interface AchievementBarProps {
	achievement: Achievement
}

export default function AchievementBar({ achievement }: AchievementBarProps) {
	function calculateProgressToPercent() {
		return (achievement.progress / achievement.goal) * 100
	}

	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<Typography
					sx={{
						flexGrow: 1,
						overflow: 'hidden',
						whiteSpace: 'nowrap',
					}}
				>
					{achievement.name}
				</Typography>
				<Typography sx={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
					{achievement.progress}/{achievement.goal}
				</Typography>
			</Box>
			<LinearProgress
				variant='determinate'
				value={calculateProgressToPercent()}
			/>
		</Box>
	)
}
