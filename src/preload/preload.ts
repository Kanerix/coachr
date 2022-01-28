import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
	titleMenuApi: {
		close(message: string) {
			ipcRenderer.send('title-menu-close', message)
		},

		maximize(message: string) {
			ipcRenderer.send('title-menu-maximize', message)
		},

		minimize(message: string) {
			ipcRenderer.send('title-menu-minimize', message)
		},
	},
	notificationApi: {
		notify(message: string) {
			ipcRenderer.send('notify', message)
		},
	},
})
