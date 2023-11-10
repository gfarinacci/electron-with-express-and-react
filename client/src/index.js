import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const logs = document.getElementById('logs')

if (window.electronAPI) {
	window.electronAPI.handleLogs((event, logLine) => {
		const oldLogs = logs.innerHTML

		let newLogs
		if (oldLogs) {
			let logArray = oldLogs.split('<br>')
      
			logArray.push(logLine)

			newLogs = logArray.join('\n')
		} else {
			newLogs = logLine
		}
		logs.innerText = newLogs
	})
}

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
