const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
	handleLogs: (callback) => ipcRenderer.on('update-logs', callback),
	toggleLogs: (callback) => ipcRenderer.on('toggle-logs', callback)
})