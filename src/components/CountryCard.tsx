import { Link } from 'react-router-dom';

import { Description } from './';

interface ICountryCard {
	id: string;
	name: string;
	imgFlag: string;
	population: string;
	region: string;
	capital: string;
}

const CountryCard = ({
	id,
	name,
	imgFlag,
	population,
	region,
	capital,
}: ICountryCard) => {
	return (
		<div className='flex flex-col h-[400px] w-[300px] bg-white dark:bg-dark-dark-blue dark:text-white rounded-md shadow-lg overflow-clip'>
			<div className='w-full h-[50%]'>
				<img src={imgFlag} alt='Flag' className='h-full w-full object-cover' />
			</div>
			<div className='flex flex-col px-6 py-8 font-semibold'>
				<Link to={`/${name}/${id}`} className='font-extrabold text-xl mb-4 text-ellipsis'>
					{name}
				</Link>

				<Description label='Population' value={population} />
				<Description label='Region' value={region} />
				<Description label='Capital' value={capital} />
			</div>
		</div>
	);
};

export default CountryCard;
