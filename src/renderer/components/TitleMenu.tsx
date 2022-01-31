import { Box, Typography, useTheme } from '@mui/material'

export const titleMenuHeight = 24

export default function TitleMenu() {
	const theme = useTheme()

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

	const colors: { 
		main: string, 
		dark: string, 
		onClick: () => void
	}[] = [
		{
			main: theme.palette.success.main,
			dark: theme.palette.success.dark,
			onClick: handleMinimize,
		},
		{
			main: theme.palette.warning.main,
			dark: theme.palette.warning.dark,
			onClick: handleMaximize,
		},
		{
			main: theme.palette.error.main,
			dark: theme.palette.error.dark,
			onClick: handleClose,
		}
	]

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				px: 1,
				WebkitAppRegion: 'drag',
				height: titleMenuHeight
			}}
		>
			<Typography
				sx={{
					flexGrow: 1,
					fontSize: '14px',
					fontWeight: 600
				}}
			>
				Coachr
			</Typography>
			{colors.map(({main, dark, onClick}, idx) => (
				<Box
					key={idx}
					sx={(theme) => ({
						borderRadius: '100%',
						backgroundColor: main,
						WebkitAppRegion: 'no-drag',
						border: `solid 1px ${theme.palette.divider}`,
						width: titleMenuHeight/2,
						height: titleMenuHeight/2,
						ml: 1,
						'&:hover': {
							backgroundColor: dark,
						}
					})}
					onClick={onClick}
				/>
			))}
		</Box>
	)
}
