import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

import useDarkMode from '../hooks/useDarkMode';

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkMode();
	const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

	const toggleDarkMode = () => {
		setTheme(colorTheme);
		setDarkSide((prev) => !prev);
	};

	return (
		<div className='flex items-center cursor-pointer' onClick={toggleDarkMode}>
			<div className='flex items-center justify-center h-7 w-7 mr-1 xl:mr-2 rounded-full bg-transparent'>
				{darkSide ? <FaSun className='text-white' /> : <FaMoon />}
			</div>
			<p className='font-extrabold dark:text-white'>
				{darkSide ? 'Light Mode' : 'Dark Mode'}
			</p>
		</div>
	);
}
