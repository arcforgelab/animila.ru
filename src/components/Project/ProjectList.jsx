import React from 'react'
import classes from './ProjectList.module.scss'

function ProjectList() {
	return (
		<div className={classes.main}>
			<div className={classes.title}>
				<h1>Проекты</h1>
			</div>
			<div className={classes.repair}>В разработке</div>
		</div>
	)
}

export default ProjectList
