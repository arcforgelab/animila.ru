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

			<p className={classes.aboutMe}>
				С 14 лет программировал на Java и с тех пор плотно увлекся этим делом.
				Постоянный участник местных и федеральных хакатонов, благодаря чему
				нашел свою работу мечты. Я обожаю изучать что-то новое и всегда рад
				усовершенствовать и улучшать продукт.
			</p>
		</div>
	)
}

export default Intro
