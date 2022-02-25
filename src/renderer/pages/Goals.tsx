import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'

import type { Exercise } from '../@types/pages'
import GoalPaperContent from '../components/GoalPaperContent'
import PageHeader from '../components/PageHeader'

export default function Goals() {
	const [postureExercises, setPostureExercises] = useState<Exercise[]>([
		{
			name: '10 x Boogie downs',
			done: true,
		},
		{
			name: '20 x Boogie ups',
			done: false,
		},
		{
			name: '10 x Boogie downs 2.0',
			done: false,
		},
	])

	const [muscleExercises, setMuscleExercises] = useState<Exercise[]>([
		{
			name: '10 x Big boy pushups',
			done: true,
		},
		{
			name: '20 x Push downs',
			done: true,
		},
		{
			name: '5 x Armting',
			done: false,
		},
	])

	return (
		<Box>
			<PageHeader header='Goals' />
			<Grid container spacing={2} justifyContent='space-between'>
				<Grid item xs={12} sm={12} md={6}>
					<Paper
						sx={{
							p: 2,
						}}
					>
						<GoalPaperContent
							exercises={postureExercises}
							setExercises={setPostureExercises}
							name='Posture'
						/>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<Paper
						sx={{
							p: 2,
						}}
					>
						<GoalPaperContent
							exercises={muscleExercises}
							setExercises={setMuscleExercises}
							name='Muscle'
						/>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	)
}
