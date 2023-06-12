import { HiOutlineChevronDown } from 'react-icons/hi';

const Filter = () => {
	return (
		<div className='flex items-center justify-between self-start xl:self-auto w-[250px] px-6 xl:px-8 py-5 font-semibold bg-white dark:bg-dark-dark-blue dark:text-white rounded-md shadow-md'>
			Filter by Region
			<HiOutlineChevronDown />
		</div>
	);
};

export default Filter;
