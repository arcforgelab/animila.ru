import classes from './Menu.module.scss'

const Menu = () => {
	return (
		<div className={classes.menu}>
			<div className={classes.logo}>
				<img className={classes.logoImg} src='assets/logo.png' />
				<h2 className={classes.logoText}>Animila</h2>
			</div>
		</div>
	)
}

export default Menu
