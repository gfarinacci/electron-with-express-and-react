import React from 'react'
import Home from '../Home'
import Logs from '../Logs'

function App() {
	const [toggleLogs, setToggleLogs] = React.useState(false)

	if (window.electronAPI) {
		window.electronAPI.toggleLogs((_event) => {
			setToggleLogs(!toggleLogs)
		})

	}

	const app = (!toggleLogs) ? <Home /> : <Logs />

	return app
}

export default App
