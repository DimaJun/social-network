import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthenticated } from '@/features/Authorization';

export const useAuth = () => {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	return {
		isAuthenticated,
	};
};
