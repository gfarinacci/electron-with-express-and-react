const { utilityProcess } = require('electron')
const path = require('path')

const stripAnsiColors = (text) => {
	return text.replace(
		/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g,
		''
	)
}

const redirectOutput = (stream, parentWindow) => {
	stream.on('data', (data) => {
		data.toString().split('\n').forEach((line) => {
			if (line !== '') {
				parentWindow.webContents.send('update-logs', line)
				console.log(`Redirected: ${stripAnsiColors(line)}`)
			}
		})
	})
}

const loadServer = (parentWindow) => {
	const serverPath = path.join(__dirname, '..', 'server', 'index.js')
  
	const serverAppProcess  = utilityProcess.fork(serverPath, undefined, { stdio: 'pipe' })
  
	const stdio = [serverAppProcess.stdout, serverAppProcess.stderr]
  
	stdio.forEach((stream) => redirectOutput(stream, parentWindow))
}

module.exports = {
	loadServer
}