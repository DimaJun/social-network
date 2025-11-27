import { Route, Routes } from 'react-router';

import { routeConfig } from '../config/routeConfig';

export function AppRouter() {
	return (
		<Routes>
			{Object.entries(routeConfig).map(([key, route]) => (
				<Route
					key={key}
					path={route.path}
					element={route.element}
				/>
			))}
		</Routes>
	);
}
