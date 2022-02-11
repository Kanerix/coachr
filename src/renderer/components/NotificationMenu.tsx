import { faBell, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Badge,
	Box,
	IconButton,
	Menu,
	MenuItem,
	MenuList,
	Tooltip,
	Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { Link } from 'react-router-dom'

import type { Notification } from '../@types/notification'

export default function NotificationMenu() {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
	const [notifications, setNotifications] = useState<Notification[]>([
		{
			name: 'Goal',
			description: 'Goal completed!',
			to: '/goal',
		},
		{
			name: 'Reminder',
			description: "You're missing 28% of your goal",
			to: '/reminders',
		},
		{
			name: 'Achievements',
			description: 'You have completed an achievement!',
			to: '/achievements',
		},
	])

	return (
		<>
			<Tooltip title='Notifications' arrow>
				<IconButton
					disabled={notifications.length === 0}
					sx={{
						m: 0.5,
						width: 40,
						height: 40,
					}}
					onClick={(e: MouseEvent<HTMLButtonElement>) =>
						setAnchorEl(e.currentTarget)
					}
				>
					<Badge
						badgeContent={notifications.length}
						color='secondary'
					>
						<FontAwesomeIcon icon={faBell} />
					</Badge>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				MenuListProps={{
					sx: {
						p: 0,
						minWidth: 240,
					},
				}}
			>
				<Box
					sx={(theme) => ({
						px: 2,
						py: 1,
						background: theme.palette.primary.main,
						display: 'flex',
						alignItems: 'center',
						color: theme.palette.primary.contrastText,
					})}
				>
					<Typography
						color='inherit'
						sx={{
							flexGrow: 1,
						}}
					>
						Notifications
					</Typography>
					<IconButton
						size='small'
						color='inherit'
						sx={{
							width: 30,
							height: 30,
						}}
						onClick={() => {
							setAnchorEl(null)
							setNotifications([])
						}}
					>
						<FontAwesomeIcon icon={faTrashCan} />
					</IconButton>
				</Box>
				<MenuList>
					{notifications.map(({ description, to }, idx) => (
						<MenuItem
							key={idx}
							onClick={() => {
								setNotifications((old) =>
									old.filter(
										(item) =>
											item.description !== description
									)
								)
								setAnchorEl(null)
							}}
							component={Link}
							to={to}
						>
							{description}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	)
}
