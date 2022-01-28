import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	Toolbar,
	List,
	ListItemIcon,
	ListItemText,
	Drawer,
	Divider,
	ListItemButton,
	Typography,
} from '@mui/material'
import { Link, useLocation } from 'react-router-dom'
import SimpleBar from 'simplebar-react'

import CoachrLogo from '../assets/CoachrLogo'
import pages from '../pages/_app'
import { titleMenuHeight } from './TitleMenu'

export const drawerWidth = 200

export default function Sidenav() {
	const location = useLocation()

	const ListItemsArray = pages.filter((page) => page.nav)

	return (
		<Drawer
			variant="permanent"
			open={true}
			sx={(theme) => ({
				'& .MuiDrawer-paper': {
					width: `${drawerWidth}px`,
					mt: `${titleMenuHeight}px`,
					borderTop: `solid 1px ${theme.palette.divider}`,
				},
			})}
		>
			<SimpleBar style={{ height: '100%' }}>
				<Toolbar
					sx={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<CoachrLogo
						fontSize="large"
						sx={{
							mr: 1,
						}}
					/>
					<Typography
						variant="h5"
						sx={{
							fontFamily: 'Palanquin Dark',
							fontWeight: '500',
							pt: 0.5
						}}
					>
						Coachr
					</Typography>
				</Toolbar>
				<Divider />
				<List
					disablePadding={true}
					sx={{
						px: 1,
					}}
				>
					{ListItemsArray.map(({ name, icon, path }) => {
						const selected = location.pathname === path

						return (
							<ListItemButton
								key={name}
								component={Link}
								to={path}
								sx={(theme) => ({
									borderRadius: theme.shape.borderRadius,
									my: 1,
									py: 1
								})}
								selected={selected}
							>
								<ListItemIcon
									sx={(theme) => ({
										minWidth: theme.spacing(5),
									})}
								>
									<FontAwesomeIcon icon={icon} />
								</ListItemIcon>
								<ListItemText primary={name} />
							</ListItemButton>
						)
					})}
				</List>
			</SimpleBar>
		</Drawer>
	)
}
