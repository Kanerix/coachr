import { BrowserWindow } from 'electron'
import { join } from 'path'

export default function createWindow() {
	const mainWindow = new BrowserWindow({
		width: 1000,
		height: 750,
		frame: false,
		webPreferences: {
			preload: join(process.cwd(), 'dist', 'preload.js'),
		},
	})

	mainWindow.loadFile(join(process.cwd(), 'dist', 'index.html'))

	return mainWindow
}
