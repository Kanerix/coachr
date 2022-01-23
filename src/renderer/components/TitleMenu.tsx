import { Box, Typography } from "@mui/material"

export const MenuHeight = 24

export default function TitleMenu() {
	const handleMinimize = () => {
		// @ts-ignore
		window.electron.titleMenuApi.minimize()
	}

	const handleMaximize = () => {
		// @ts-ignore
		window.electron.titleMenuApi.maximize()
	}

	const handleClose = () => {
		// @ts-ignore
		window.electron.titleMenuApi.close()
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexGrow: 1,
				flexDirection: "row",
				justifyContent: "center",
				alignItems: "center",
				maxHeight: `${MenuHeight}px`,
				WebkitAppRegion: "drag",
				paddingInline: "4px",
			}}
		>
			<Typography
				sx={(theme) => ({
					paddingBlock: "8px",
					fontSize: "14px",
					fontWeight: 500,
					flex: 1,
					color: theme.palette.text.disabled,
					overflow: "hidden",
				})}
			>
				Coachr
			</Typography>
			<Box
				sx={(theme) => ({
					background: theme.palette.success.main,
					height: `calc(${MenuHeight}px - 10px)`,
					width: `calc(${MenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: "100%",
					marginInline: "4px",
					WebkitAppRegion: "no-drag",
					":hover": {
						background: theme.palette.success.light,
					},
				})}
				component={"button"}
				onClick={handleMinimize}
			/>
			<Box
				sx={(theme) => ({
					background: theme.palette.warning.main,
					height: `calc(${MenuHeight}px - 10px)`,
					width: `calc(${MenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: "100%",
					marginInline: "4px",
					WebkitAppRegion: "no-drag",
					":hover": {
						background: theme.palette.warning.light,
					},
				})}
				component={"button"}
				onClick={handleMaximize}
			/>
			<Box
				sx={(theme) => ({
					background: theme.palette.error.main,
					height: `calc(${MenuHeight}px - 10px)`,
					width: `calc(${MenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: "100%",
					marginInline: "4px",
					WebkitAppRegion: "no-drag",
					":hover": {
						background: theme.palette.error.light,
					},
				})}
				component={"button"}
				onClick={handleClose}
			/>
		</Box>
	)
}
