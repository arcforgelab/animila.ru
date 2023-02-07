import React from 'react'

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>
				Animila
			</h1>
			<p className='text-base md:text-xl mb-3 font-medium'>
				Full-stack разработчик
			</p>
			<p className='text-sm max-w-xl mb-6 font-bold'>
				Привет, я студент 3 курса по специальности Информационные системы и
				программирование по направлению Администратор Баз данных ЯКСЭ им
				"Дудкина". Самостоятельно занимаюсь веб-разработкой, настройкой серверов
				и реализации бекенда. Также у меня есть{' '}
				<a
					href='https://github.com/Animila'
					target='_blank'
					className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
					rel='noreferrer noopener'
				>
					GitHub
				</a>{' '}
				где вы можете посмотреть мои работы
			</p>
		</div>
	)
}

export default Intro
