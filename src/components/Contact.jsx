import React from 'react'
import Title from './Title'

function Contact() {
	return (
		<div className='flex flex-col mb-10 mx-auto'>
			<div className='flex justify-center items-center'>
				<form
					action='https://getform.io/f/d9de5b90-8727-450f-8c87-66142b45299b'
					method='POST'
					className='flex flex-col w-full md:w-7/12 '
				>
					<Title>Обратная связь</Title>

					<input
						type='text'
						name='name'
						placeholder='Имя'
						className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<input
						type='email'
						name='email'
						placeholder='Почта'
						className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
					/>
					<textarea
						name='message'
						rows='10'
						placeholder='Сообщение'
						className='p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none'
					></textarea>
					<button
						type='submit'
						className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-black dark:hover:stroke-white'
					>
						Связаться со мной
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact
