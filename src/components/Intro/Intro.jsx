import React from 'react'
import classes from './Intro.module.scss'

const Intro = () => {
	return (
		<div className={classes.main}>
			<div className={classes.mePhoto}>
				<h1 className={classes.title}>Привет, я Animila</h1>
				<sup className={classes.subTitle}>
					(На самом деле, я Христофоров Илья)
				</sup>
			</div>
			<a
				href='https://github.com/Animila'
				target='_blank'
				className={classes.githubLink}
				rel='noreferrer noopener'
			>
				{'->'} GitHub {'<-'}
			</a>

		
		</div>
	)
}

export default Intro
