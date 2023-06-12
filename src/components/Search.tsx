import { Dispatch, SetStateAction } from 'react';
import { BsSearch } from 'react-icons/bs';

interface ISearch {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

const Search = ({ query, setQuery }: ISearch) => {
	return (
		<div className='flex items-center w-full xl:w-[540px] px-6 xl:px-12 py-5 bg-white dark:bg-dark-dark-blue dark:text-white rounded-md shadow-md'>
			<BsSearch className='text-light-dark-gray dark:text-white mr-6 h-5 w-5' />
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Search for a country...'
				className='w-full focus:outline-none dark:bg-dark-dark-blue'
			/>
		</div>
	);
};

export default Search;
