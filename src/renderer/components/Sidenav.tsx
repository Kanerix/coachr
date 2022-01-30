import {
	Toolbar,
	List,
	ListItemIcon,
	ListItemText,
	Drawer,
	Divider,
	ListItemButton,
	Typography,
} from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import SimpleBar from "simplebar-react"

import CoachrLogo from "../assets/CoachrLogo"
import pages from "../pages/_app"
import { MenuHeight } from "./TitleMenu"

export const DrawerWidth = 240

export default function Sidenav() {
	const location = useLocation()

	const ListItemsArray = pages.filter((page) => page.nav)

	return (
		<Drawer
			variant="permanent"
			open={true}
			sx={(theme) => ({
				"& .MuiDrawer-paper": {
					width: `${DrawerWidth}px`,
					marginTop: `${MenuHeight}px`,
					borderTop: `solid 1px ${theme.palette.divider}`,
				},
			})}
		>
			<SimpleBar style={{ height: "100%" }}>
				<Toolbar
					sx={{
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<CoachrLogo
						fontSize="large"
						sx={(theme) => ({
							marginRight: theme.spacing(1),
						})}
					/>
					<Typography
						variant="h5"
						sx={(theme) => ({
							fontFamily: "Palanquin Dark",
							fontWeight: "500",
							paddingTop: theme.spacing(0.3),
						})}
					>
						Coachr
					</Typography>
				</Toolbar>
				<Divider />
				<List
					disablePadding={true}
					sx={(theme) => ({
						paddingInline: `${theme.spacing(
							1
						)} calc(${theme.spacing(1)} + 7px)`,
					})}
				>
					{ListItemsArray.map(({ name, Icon, path }) => {
						const selected = location.pathname === path

						return (
							<ListItemButton
								key={name}
								component={Link}
								to={path}
								sx={(theme) => ({
									borderRadius: theme.shape.borderRadius,
									marginBlock: theme.spacing(0.5),
								})}
								selected={selected}
							>
								<ListItemIcon
									sx={(theme) => ({
										minWidth: theme.spacing(5),
									})}
								>
									<Icon
										color={
											selected ? "secondary" : "inherit"
										}
									/>
								</ListItemIcon>
								<ListItemText
									sx={(theme) => ({
										fontWeight: 600,
										color: selected
											? theme.palette.secondary.main
											: theme.palette.text.primary,
									})}
									primary={name}
								/>
							</ListItemButton>
						)
					})}
				</List>
			</SimpleBar>
		</Drawer>
	)
}
