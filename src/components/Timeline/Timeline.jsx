import React from 'react'
import TimelineItem from './TimelineItem'
import timeline from '../../data/timeline.js'
import Title from '../Title'

function Timeline() {
	return (
		<div className='flex flex-col md:flex-row justify-center my-20'>
			<div className='w-full md:w-7/12'>
				<Title>Хронология</Title>
				{timeline.map(state => (
					<TimelineItem
						year={state.year}
						title={state.title}
						description={state.description}
					/>
				))}
			</div>
		</div>
	)
}

export default Timeline
