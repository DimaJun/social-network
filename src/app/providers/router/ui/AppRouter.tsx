import { Route, Routes } from 'react-router';

import { routeConfig } from '../config/routeConfig';

export function AppRouter() {
	return (
		<Routes>
			{Object.entries(routeConfig).map(([_, { path, element }], index) => (
				<Route
					key={index}
					path={path}
					element={element}
				/>
			))}
		</Routes>
	);
}
