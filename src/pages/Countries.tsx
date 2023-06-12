import { useState, useMemo, useEffect } from 'react';

import data from '../utils/data.json';
import { Search, CountryCard, Filter } from '../components';

const Countries = () => {
	const [countries, setCountries] = useState(data);
	const [query, setQuery] = useState('');

	// useEffect(() => {
	// 	const fetchCountries = async () => {
	// 		const response = await fetch('https://restcountries.com/v3.1/all');
	// 		const data = await response.json();

	// 		console.log(data);
	// 	};

	// 	fetchCountries();
	// });

	const filteredCountries = useMemo(() => {
		return countries.filter((country) => {
			return country.name.toLowerCase().includes(query.toLowerCase());
		});
	}, [countries, query]);

	return (
		<div className='flex flex-col min-h-full px-6 xl:mx-52 4k:mx-[30rem] py-10'>
			<div className='flex flex-col xl:flex-row gap-10 xl:gap-0 justify-between items-center'>
				<Search query={query} setQuery={setQuery} />
				<Filter />
			</div>

			<div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] justify-center xl:justify-between content-center xl:content-around gap-16 mt-10'>
				{filteredCountries.map((country) => (
					<CountryCard
						key={country.name}
						name={country.name}
						id={country.name}
						imgFlag={country.flag}
						population={country.population}
						region={country.region}
						capital={country.capital}
					/>
				))}
			</div>
		</div>
	);
};

export default Countries;
