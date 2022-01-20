import {
	Toolbar,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Drawer,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { Box } from "@mui/system";

export const drawerWidth = 220;

export default function Sidenav() {
	return (
		<Box>
			<Drawer
				variant="permanent"
				open={true}
				sx={{
					"& .MuiDrawer-paper": {
						width: `${drawerWidth}px`,
					},
				}}
			>
				<Box>
					<Toolbar>Postur</Toolbar>
					<List>
						{["Inbox", "Starred", "Send email", "Drafts"].map(
							(text, _) => (
								<ListItem button key={text}>
									<ListItemIcon>
										<InboxIcon />
									</ListItemIcon>
									<ListItemText primary={text} />
								</ListItem>
							)
						)}
					</List>
				</Box>
			</Drawer>
			<Box sx={{ width: `${drawerWidth}px` }} />
		</Box>
	);
}
