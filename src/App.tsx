import { Routes, Route } from 'react-router-dom';

import { Countries, CountryDetails } from './pages';
import { Layout, Nav } from './components';

const App = () => {
	return (
		<>
			<Layout>
				<Nav />
				<Routes>
					<Route path='/' element={<Countries />} />
					<Route path='/:name/:id' element={<CountryDetails />} />
				</Routes>
			</Layout>
		</>
	);
};

export default App;
