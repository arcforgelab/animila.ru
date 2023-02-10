import React from 'react'

function Intro() {
	return (
		<div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
			<h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold dark:text-white'>
				Привет, я Animila
			</h1>
			<sup className='text-base'>(На самом деле, я Христофоров Илья)</sup>
			<p className='text-base md:text-xl font-medium max-w-xl mb-6'>
				Пробовал себя во многих делах - от администрирования до веб-верстки; от
				Pascal Turbo до React. Так что добро пожаловать в мой мини блог. Если я
				вас заинтересовал, то вы можете посетить мой{' '}
				<a
					href='https://github.com/Animila'
					target='_blank'
					className='text-green-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
					rel='noreferrer noopener'
				>
					GitHub-профиль
				</a>{' '}
				где вы можете посмотреть мои работы или оставить мне сообщение в заявке
				внизу
			</p>
		</div>
	)
}

export default Intro
