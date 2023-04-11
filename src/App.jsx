import React, { useEffect, useState } from 'react'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Menu from './components/Menu'
import Portfolio from './components/Portfolio/Portfolio'
import SkillsList from './components/Skills/SkillsList'

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
			<div className='dark:bg-stone-900 dark:text-stone-300 bg-white text-stone-900 min-h-screen font-inter w-100 py-4 px-4'>
				<Menu callback={switchTheme} theme={theme} />
				<Intro />
				<Portfolio />
				<SkillsList />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
