const Menu = ({ callback, theme }) => {
	return (
		<div className='flex items-center w-100 justify-around'>
			<div className='flex items-center'>
				<img className='w-12' src='assets/logo.png' />
				<h2 className='ml-4 text-4xl font-bold'>Animila</h2>
			</div>
			<button
				type='button'
				onClick={callback}
				className='p-2 z-10 bg-green-900 text-lg rounded-md dark:text-black text-white dark:bg-green-300'
			>
				{theme === 'dark' ? 'Светлая' : 'Темная'}
			</button>
		</div>
	)
}

export default Menu
