import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Badge,
	IconButton,
	Menu,
	MenuItem,
	MenuList,
	Tooltip,
	Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

import type { Notification } from "../types/notification";

export default function NotificationMenu() {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [notifications] = useState<Notification[]>([
		{
			name: "Goal",
			description: "Goal completed!",
			to: "/goal",
		},
		{
			name: "Reminder",
			description: "You'r missing 28% of your goal",
			to: "/reminders",
		},
		{
			name: "Achievements",
			description: "You have completed an achievement!",
			to: "/achievements",
		},
	]);

	return (
		<>
			<Tooltip title="Notifications" arrow>
				<IconButton
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
						color="secondary"
					>
						<FontAwesomeIcon icon={faBell} />
					</Badge>
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchorEl}
				open={Boolean(anchorEl)}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				MenuListProps={{
					sx: {
						p: 0,
						minWidth: 240,
					},
				}}
			>
				<Typography
					sx={(theme) => ({
						px: 2,
						py: 1,
						background: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
					})}
				>
					Notifications
				</Typography>
				<MenuList>
					{notifications.map(({ description, to }, idx) => (
						<MenuItem
							key={idx}
							onClick={() => setAnchorEl(null)}
							component={Link}
							to={to}
						>
							{description}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</>
	);
}
