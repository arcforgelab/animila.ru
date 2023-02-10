import React from 'react'

function SkillsItem({ work, year, skills }) {
	return (
		<ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'>
			<li className='mb-10 ml-4'>
				<div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
				<p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
					<span className='inline-block px-2 py-1 font-semibold text-white dark:text-slate-900 dark:bg-white bg-stone-900 rounded-md'>
						{work}
					</span>
					<h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
						{year}
					</h3>
					<div className='my-2 text-sm font-normal leading-none text-stone-400 dark:text-stone-500'></div>
				</p>
				<div className='flex flex-wrap'>
					{skills.map(skill => (
						<span className='mr-3 mt-2 text-base font-normal text-stone-50 dark:text-stone-700 bg-green-400 rounded-sm px-2 py-1 flex items-center whitespace-nowrap'>
							{skill}
						</span>
					))}
				</div>
			</li>
		</ol>
	)
}

export default SkillsItem
