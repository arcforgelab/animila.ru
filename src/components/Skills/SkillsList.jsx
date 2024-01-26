import React from 'react'
import classes from './SkillsList.module.scss'

function SkillsList() {
	const list = [
		{
			title: 'Frontend',
		},
		{
			title: 'Backend',
		},
		{
			title: 'Mobile App',
		},
		{
			title: 'Other',
		},
	]
	return (
		<div className={classes.main}>
			<div className={classes.title}>
				<h1>Список навыков</h1>
			</div>
			<div className={classes.lists}>
				{list.map(item => (
					<div className={classes.item}>{item.title}</div>
				))}
			</div>
		</div>
	)
}

export default SkillsList
