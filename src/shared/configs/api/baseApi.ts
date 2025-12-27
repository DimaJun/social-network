import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { RootState } from '@/app/store';
import { AuthStateSchema } from '@/features/Authorization/model/types/auth';
import { authSliceActions } from '@/features/Authorization';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:8000',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = (getState() as RootState).auth.access_token;
		if (token) {
			headers.set('Authorization', `Bearer ${token}`);
		}
		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions
) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.error?.status === 401) {
		const refreshResult = await baseQuery(
			{
				url: '/auth/refresh',
				method: 'POST',
			},
			api,
			extraOptions
		);

		if (refreshResult?.data) {
			api.dispatch(authSliceActions.setCredentials(refreshResult.data as AuthStateSchema));

			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(authSliceActions.logout());
		}
	}

	return result;
};

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithReauth,
	endpoints: () => ({}),
});
