/* eslint-disable @typescript-eslint/no-explicit-any */

const Layout = ({ children }: any) => {
	return (
		<main className='min-h-screen w-full font-Nunito-Sans bg-light-very-light-gray dark:bg-dark-very-dark-blue transition-all duration-200'>
			{children}
		</main>
	);
};

export default Layout;
