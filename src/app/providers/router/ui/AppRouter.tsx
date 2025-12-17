import { Route, Routes } from 'react-router';

import { routeConfig } from '../config/routeConfig';

import { ProtectedRoute } from '@/app/providers/router/ui/ProtectedRoute';

export function AppRouter() {
	return (
		<Routes>
			{Object.entries(routeConfig).map(([_, { path, element, authNeeded }], index) => {
				if (authNeeded) {
					return (
						<Route
							key={index}
							element={<ProtectedRoute />}
						>
							<Route
								path={path}
								element={element}
							/>
						</Route>
					);
				}
				return (
					<Route
						key={index}
						path={path}
						element={element}
					/>
				);
			})}
		</Routes>
	);
}
