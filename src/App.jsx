import React, { useState } from 'react'
import classes from './App.module.scss'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import IntroDescription from './components/IntroDescription/IntroDescription'
import Menu from './components/Menu/Menu'
import ProjectList from './components/Project/ProjectList'
import SkillsList from './components/Skills/SkillsList'

function App() {
	const [theme, setTheme] = useState(null)

	return (
		<>
			<Menu />
			<div className={classes.main}>
				<Intro />
				<IntroDescription />
				<SkillsList />
				<ProjectList />
				<Contact />
			</div>
			<Footer />
		</>
	)
}

export default App
