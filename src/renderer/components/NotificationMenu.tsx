import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import { MouseEvent, useState } from 'react'

export default function NotificationMenu() {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

	return (
		<>
			<Tooltip title='Notifications' arrow>
				<IconButton
					onClick={(e: MouseEvent<HTMLButtonElement>) => (
						setAnchorEl(e.currentTarget)
					)}
				>
					<Badge badgeContent={9} color='secondary'>
						<FontAwesomeIcon icon={faBell} />
					</Badge>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
			>
				<MenuItem>test</MenuItem>
			</Menu>
		</>
	)
}