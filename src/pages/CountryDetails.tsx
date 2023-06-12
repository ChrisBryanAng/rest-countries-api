import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

import data from '../utils/data.json';
import { CountryDetail } from '../components';

const CountryDetails = () => {
	const { name } = useParams();

	const country = data.find((item) => item.name === name);

	return (
		<div className='flex flex-col xl:flex-row min-h-full gap-12 px-6 md:mx-10 2xl:mx-52 4k:mx-[30rem] py-10 dark:text-white'>
			<div className='xl:h-[50%] xl:w-[50%]'>
				<Link
					to='/'
					className='flex w-fit px-4 py-1 items-center xl:mb-20 bg-white dark:bg-dark-dark-blue shadow-lg'
				>
					<HiOutlineArrowNarrowLeft className='h-5 w-5 mr-2' />
					Back
				</Link>

				<div className='w-full h-[240px] md:w-[450px] md:h-[300px] xl:w-[600px] xl:h-[400px] mt-16 xl:mt-0'>
					<img src={country?.flag} alt='Flag' className='h-full w-full object-cover' />
				</div>
			</div>

			<CountryDetail
				name={country?.name}
				nativeName={country?.nativeName}
				population={country?.population}
				region={country?.region}
				subRegion={country?.subregion}
				capital={country?.capital}
				topLevelDomain={country?.topLevelDomain}
				currencies={country?.currencies}
				languages={country?.languages}
				borderCountries={country?.borders}
			/>
		</div>
	);
};

export default CountryDetails;
