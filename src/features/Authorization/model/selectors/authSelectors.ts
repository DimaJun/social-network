import { RootState } from '@/app/store';

export const selectIsAuthenticated = (state: RootState): boolean => {
	return state.auth.user !== null && state.auth.access_token !== null;
};
