import { ThemeSwitcher } from './';

const Nav = () => {
	return (
		<nav className='flex items-center justify-between px-6 md:px-16 2xl:px-[14.5rem] 4k:px-[31.5rem] w-full h-24 xl:h-20 bg-white dark:bg-dark-dark-blue shadow-md'>
			<p className='font-Nunito-Sans text-lg xl:text-2xl font-extrabold dark:text-white'>
				Where in the world?
			</p>
			<ThemeSwitcher />
		</nav>
	);
};

export default Nav;
