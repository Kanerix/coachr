import { app, BrowserWindow, ipcMain } from "electron";
import createWindow from "./window";

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

// Title menu api

ipcMain.on("title-menu-close", () => {
	app.quit();
});

ipcMain.on("title-menu-maximize", () => {
	const window = BrowserWindow.getFocusedWindow();

	if (!window) {
		return;
	}

	if (!window.isMaximized() && window.isMaximizable()) {
		window.maximize();
		return;
	}

	window.restore();
});

ipcMain.on("title-menu-minimize", () => {
	const window = BrowserWindow.getFocusedWindow();

	if (!window) {
		return;
	} else if (window.isMinimizable()) {
		window.minimize();
	}
});
