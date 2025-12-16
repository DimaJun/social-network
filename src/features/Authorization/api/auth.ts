import { AuthStateSchema, RegisterQueryArgs } from '../model/types/auth';

import { baseApi } from '@/shared/configs/api';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation<AuthStateSchema, RegisterQueryArgs>({
			query: (data) => ({
				url: '/auth/register',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useRegisterMutation } = authApi;
