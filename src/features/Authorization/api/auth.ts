import {
	AuthStateSchema,
	LoginQueryArgs,
	RegisterQueryArgs,
	RegisterResponse,
} from '../model/types/auth';

import { baseApi } from '@/shared/configs/api';

export const authApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		register: build.mutation<RegisterResponse, RegisterQueryArgs>({
			query: (data) => ({
				url: '/auth/register',
				method: 'POST',
				body: data,
			}),
		}),
		login: build.mutation<AuthStateSchema, LoginQueryArgs>({
			query: (data) => ({
				url: '/auth/login',
				method: 'POST',
				body: data,
			}),
		}),
		logout: build.mutation<{ message: string }, void>({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
		}),
	}),
});

export const { useRegisterMutation } = authApi;
export const { useLoginMutation } = authApi;
export const { useLogoutMutation } = authApi;
