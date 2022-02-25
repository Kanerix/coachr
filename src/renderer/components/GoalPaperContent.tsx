import type { Dispatch, SetStateAction } from 'react'
import {
	Box,
	Checkbox,
	Divider,
	Icon,
	List,
	ListItemButton,
	Typography,
	Button,
	ButtonGroup,
} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import type { Exercise } from '../@types/pages'

interface GoalPaperContentProps {
	name: string
	exercises: Exercise[]
	setExercises: Dispatch<SetStateAction<Exercise[]>>
}

export default function GoalPaperContent({
	name,
	exercises,
	setExercises,
}: GoalPaperContentProps) {
	return (
		<>
			<Typography fontSize={22} sx={{ px: 1 }}>
				{name}
			</Typography>
			<Divider />
			{exercises.length > 0 ? (
				<List>
					{exercises.map((item, itemIndex) => (
						<ListItemButton
							key={itemIndex}
							dense={true}
							sx={{
								width: '100%',
								my: 0.5,
							}}
							onClick={() => {
								setExercises((old) =>
									old.map((exercise) => {
										if (exercise == item) {
											exercise.done = !exercise.done
										}

										return exercise
									})
								)
							}}
						>
							<Box
								sx={{
									mr: 1,
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Checkbox
									checked={item.done}
									disableRipple={true}
								/>
								<Typography>{item.name}</Typography>
							</Box>
						</ListItemButton>
					))}
				</List>
			) : (
				<Box
					sx={{
						my: 2,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Icon
						fontSize='small'
						color='primary'
						sx={{
							height: '100%',
							mr: 1,
						}}
					>
						<FontAwesomeIcon icon={faCircleCheck} />
					</Icon>
					<Typography sx={{ bottom: '-2px' }}>All done!</Typography>
				</Box>
			)}
			<Divider />
			<ButtonGroup
				fullWidth
				sx={{
					mt: 2,
					display: 'flex',
				}}
			>
				<Button>Create new</Button>
				<Button
					onClick={() =>
						setExercises((old) =>
							old.filter((exercise) => !exercise.done)
						)
					}
				>
					Remove done
				</Button>
			</ButtonGroup>
		</>
	)
}
