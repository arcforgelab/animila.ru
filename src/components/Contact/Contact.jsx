import React from 'react'
import classes from './Contact.module.scss'

const Contact = () => {
	return (
		<div className=''>
			<div className={classes.title}>Обратная связь</div>
			<form
				action='https://getform.io/f/0f7d6781-beb4-4566-93e3-63d29b21e45d'
				method='POST'
				className={classes.form}
			>
				<label>Имя</label>
				<input type='text' required name='name' placeholder='Имя' />
				<label>Почта</label>
				<input type='email' required name='email' placeholder='Почта' />
				<label>Сообщение</label>
				<textarea
					name='message'
					required
					rows='10'
					placeholder='Сообщение'
				></textarea>
				<button type='submit'>Связаться со мной</button>
			</form>
		</div>
	)
}

export default Contact
