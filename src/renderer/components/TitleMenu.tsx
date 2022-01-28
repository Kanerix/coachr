import { Box, Typography } from '@mui/material'

export const titleMenuHeight = 24

export default function TitleMenu() {
	const handleMinimize = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		window.electron.titleMenuApi.minimize()
	}

	const handleMaximize = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		window.electron.titleMenuApi.maximize()
	}

	const handleClose = () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		window.electron.titleMenuApi.close()
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexGrow: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				maxHeight: `${titleMenuHeight}px`,
				WebkitAppRegion: 'drag',
				p: 1
			}}
		>
			<Typography
				sx={(theme) => ({
					fontSize: '14px',
					fontWeight: 500,
					flex: 1,
					color: theme.palette.text.disabled,
					overflow: 'hidden',
				})}
			>
				Coachr
			</Typography>
			<Box
				sx={(theme) => ({
					background: theme.palette.success.main,
					height: `calc(${titleMenuHeight}px - 10px)`,
					width: `calc(${titleMenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: '100%',
					mr: 1,
					WebkitAppRegion: 'no-drag',
					':hover': {
						background: theme.palette.success.light,
					},
				})}
				component={'button'}
				onClick={handleMinimize}
			/>
			<Box
				sx={(theme) => ({
					background: theme.palette.warning.main,
					height: `calc(${titleMenuHeight}px - 10px)`,
					width: `calc(${titleMenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: '100%',
					mr: 1,
					WebkitAppRegion: 'no-drag',
					':hover': {
						background: theme.palette.warning.light,
					},
				})}
				component={'button'}
				onClick={handleMaximize}
			/>
			<Box
				sx={(theme) => ({
					background: theme.palette.error.main,
					height: `calc(${titleMenuHeight}px - 10px)`,
					width: `calc(${titleMenuHeight}px - 10px)`,
					border: `solid 1px ${theme.palette.divider}`,
					borderRadius: '100%',
					WebkitAppRegion: 'no-drag',
					':hover': {
						background: theme.palette.error.light,
					},
				})}
				component={'button'}
				onClick={handleClose}
			/>
		</Box>
	)
}
