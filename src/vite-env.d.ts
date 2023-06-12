/// <reference types="vite/client" />
declare module '*';

// unfinished
interface ICountries {
	borders: string[];
	capital: string[];
	continents: string[];
}

interface ICountryDetail {
	name: string;
	nativeName: string;
	population: string;
	region: string;
	subRegion: string;
	capital: string;
	topLevelDomain: string;
	currencies: {
		name: string;
	}[];
	languages: {
		name: string;
	}[];
	borderCountries: string[];
}
