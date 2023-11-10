import React from 'react'
import axios from 'axios'
import logo from './logo.svg'
import './Home.css'

function Home() {
	const [message, setMessage] = React.useState(null)

	React.useEffect(() => {
		axios.get('/hello').then((response) => {
			setMessage(response.data)
		})
	}, [])

	return (
		<div className="Home">
			<header className="Home-header">
				<img src={logo} className="Home-logo" alt="logo" />
				<p>
					{message}
				</p>
			</header>
		</div>
	)
}

export default Home
