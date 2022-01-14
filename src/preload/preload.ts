import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
	notificationApi: {
		notify(message: string) {
			ipcRenderer.send("notify", message);
		},
	},
});
