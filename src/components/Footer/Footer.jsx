import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={classes.main}>
			<p className=''>
				&copy; {new Date().getFullYear()} Animila. Все права защищены
			</p>
		</div>
	)
}

export default Footer
