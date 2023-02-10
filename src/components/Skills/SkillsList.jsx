import React from 'react'
import skillsListItem from '../../data/skills.js'
import Title from '../Title'
import SkillsItem from './SkillsItem'

function SkillsList() {
	return (
		<div className='flex flex-col md:flex-row justify-center my-20'>
			<div className='w-full md:w-7/12'>
				<Title>Список навыков</Title>
				{skillsListItem.map(state => (
					<SkillsItem
						work={state.work}
						year={state.year}
						skills={state.skills}
					/>
				))}
			</div>
		</div>
	)
}

export default SkillsList
