<<<<<<< Updated upstream
import { useState } from 'react'
import { Box, Grid, Paper } from '@mui/material'

import GoalPaperContent from '../components/GoalPaperContent'
import PageHeader from '../components/PageHeader'
import type { Exercise } from '../@types/pages'
=======
import {
	Box,
	Divider,
	Grid,
	List,
	ListItemButton,
	Paper,
	Typography,
} from "@mui/material";

import PageHeader from "../components/PageHeader";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
						<GoalPaperContent
							exercises={muscleExercises}
							setExercises={setMuscleExercises}
							name='Muscle'
						/>
=======
						<Typography fontSize={22} sx={{ px: 1 }}>
							Posture
						</Typography>
						<Divider />
						<List>
							<ListItemButton>test123</ListItemButton>
						</List>
						<Divider />
						<Box>test</Box>
>>>>>>> Stashed changes
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
}
