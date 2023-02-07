import React, { useEffect, useState } from 'react'
import Contact from './components/contact'
import Footer from './components/Footer'
import Intro from './components/intro'
import Portfolio from './components/Portfolio/Portfolio'
import Timeline from './components/Timeline/Timeline'

function App() {
	const [theme, setTheme] = useState(null)

	// Если цветовая тема в браузере - темная
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	// смена цвета
	const switchTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	// указание на то, какая тема стоит
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	return (
		<>
			<button
				type='button'
				onClick={switchTheme}
				className='fixed p-2 z-10 right-20 top-4 dark:bg-violet-900 text-lg p-1 rounded-md dark:text-white bg-violet-300'
			>
				{theme === 'dark' ? 'Светлая' : 'Темная'}
			</button>
			<div className='dark:bg-stone-900 dark:text-stone-300 bg-white text-stone-900 min-h-screen font-inter'>
				<Intro />
				<Portfolio />
				<Timeline />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
