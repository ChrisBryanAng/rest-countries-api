import { Description } from './';

const CountryDetail = ({
	name,
	nativeName,
	population,
	region,
	subRegion,
	capital,
	topLevelDomain,
	currencies,
	languages,
	borderCountries,
}: ICountryDetail) => {
	return (
		<div className='flex flex-col gap-8 xl:gap-0 xl:self-end xl:w-[50%] xl:pb-8'>
			<div className='flex flex-col'>
				<p className='font-extrabold text-xl xl:text-3xl mb-8 text-ellipsis'>{name}</p>
				<div className='flex flex-col gap-8 xl:flex-row xl:justify-between'>
					<div className='flex flex-col gap-2'>
						<Description label='Native Name' value={nativeName} />
						<Description label='Population' value={population} />
						<Description label='Region' value={region} />
						<Description label='Sub Region' value={subRegion} />
						<Description label='Capital' value={capital} />
					</div>

					<div className='flex flex-col gap-2'>
						<Description label='Top level domain' value={topLevelDomain} />
						<Description label='Currencies' value={currencies[0].name} />
						<Description label='Languages' value={languages[0].name} />
					</div>
				</div>
			</div>

			<div className='flex flex-col xl:flex-row xl:mt-16 xl:gap-4'>
				<p className='font-semibold text-lg mb-4 text-ellipsis min-w-max'>
					Border Countries:
				</p>
				<div className='flex gap-4 flex-wrap'>
					{borderCountries?.map((country, idx) => (
						<div
							key={idx}
							className='flex items-center justify-center w-32 h-8 dark:bg-dark-dark-blue shadow-md'
						>
							{country}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default CountryDetail;
