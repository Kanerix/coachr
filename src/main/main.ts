import { app, BrowserWindow, ipcMain, Notification } from "electron";
import { join } from "path";

function createWindow() {
	const win = new BrowserWindow({
		width: 1000,
		height: 750,
		frame: false,
		webPreferences: {
			preload: join(process.cwd(), "dist", "preload.js"),
		},
	});

	win.loadFile(join(process.cwd(), "dist", "index.html"));
}

app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

ipcMain.on("notify", (_, message: string) => {
	new Notification({ title: "Notification", body: message }).show();
});
