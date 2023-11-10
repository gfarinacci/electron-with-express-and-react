const { app, BrowserWindow, Menu, screen } = require('electron')
const path = require('node:path')
const { loadServer } = require('./load-server')
const { getMenu } = require('./menu')

const createWindow = () => {
	if (!process.env.NODE_ENV) {
		process.env.NODE_ENV = 'production'
	}

	process.env.APP_DIR = app.getPath('userData')

	let win = new BrowserWindow({
		width: screen.getPrimaryDisplay().workArea.width,
		height: screen.getPrimaryDisplay().workArea.height,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})
  
	Menu.setApplicationMenu(getMenu(win))
  
	loadServer(win)
  
	if (process.env.NODE_ENV === 'development') {
		win.loadURL('http://localhost:3000')
	} else {
		win.loadURL('http://localhost:5000')
	}

	win.once('ready-to-show', () => win.show())

	win.on('closed', () => {
		win = null
	})
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})