import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'

import GoalPaperContent from '../components/GoalPaperContent'
import PageHeader from '../components/PageHeader'
import type { Exercise } from '../@types/pages'

export default function Goals() {
	const [postureExercises, setPostureExercises] = useState<Exercise[]>([
		{
			name: 'Boogie downs',
			done: true,
		},
		{
			name: 'Boogie ups',
			done: false,
		},
		{
			name: 'Boogie downs 2.0',
			done: false,
		},
	])

	const [muscleExercises, setMuscleExercises] = useState<Exercise[]>([
		{
			name: 'Big boy pushups',
			done: true,
		},
		{
			name: 'Push downs',
			done: true,
		},
		{
			name: 'Armting',
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
							name='Postur'
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
