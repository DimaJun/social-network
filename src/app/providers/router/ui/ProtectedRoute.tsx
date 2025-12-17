import { Navigate, Outlet } from 'react-router';

import { useAuth } from '@/shared/hooks/useAuth';

interface ProtectedRouteProps {
	redirectPath?: string;
}

export function ProtectedRoute({ redirectPath = '/auth' }: ProtectedRouteProps) {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return (
			<Navigate
				to={redirectPath}
				replace
			/>
		);
	}

	return <Outlet />;
}
