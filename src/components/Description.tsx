interface IDescription {
	label: string;
	value: string;
}

const Description = ({ label, value }: IDescription) => {
	return (
		<p className='mr-2 capitalize'>
			{label}:{' '}
			<span className='font-light dark:text-light-very-light-gray/70'>{value}</span>
		</p>
	);
};

export default Description;
