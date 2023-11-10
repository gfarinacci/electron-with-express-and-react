const express = require('express')
const path = require('path')
const app = express()
const port = 5000

const logFormat = (textLine) => {
	return `[${new Date().toISOString()}] ${textLine}`
}

const printLog = (textLine) => {
	console.log(logFormat(textLine))
}

app.get('/hello', (_req, res) => {
	printLog('Hello World!')
  
	res.send('Hello World!')
})

app.get('/write-file', (_req, _res) => {
	const fs = require('fs')
	try { 
		const filePath = path.join(process.env.APP_DIR, 'example.txt')
		fs.writeFileSync(filePath, 'The text to write in the file', 'utf-8') 
		printLog(`Wrote file at ${filePath}`)
	}
	catch(e) { 
		printLog('Failed to save the file!')
	}
})

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
}

app.listen(port, () => {
	printLog(`Example app listening on port ${port}`)
})