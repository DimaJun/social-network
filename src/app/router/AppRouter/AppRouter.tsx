import { Route, Routes } from 'react-router';

import { routeConfig } from '../config/routeConfig';

export function AppRouter() {
	return (
		<Routes>
			{Object.values(routeConfig).map((value) => (
				<Route
					key={value.path}
					path={value.path}
					element={value.element}
				/>
			))}
		</Routes>
	);
}
