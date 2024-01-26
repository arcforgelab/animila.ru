import React, { useState } from 'react'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Intro from './components/Intro/Intro'
import Menu from './components/Menu/Menu'
import ProjectList from './components/Project/ProjectList'
import SkillsList from './components/Skills/SkillsList'

function App() {
	const [theme, setTheme] = useState(null)

	return (
		<>
			<div>
				<Menu />
				<Intro />
				<SkillsList />
				<ProjectList />
				<Contact />
				<Footer />
			</div>
		</>
	)
}

export default App
