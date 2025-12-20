import { Profile } from '../model/types/profile';

import { baseApi } from '@/shared/configs/api';

const profileApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getMyProfile: build.query<Profile, void>({
			query: () => ({
				url: '/profile/my',
				method: 'GET',
			}),
		}),
	}),
});

export const { useGetMyProfileQuery } = profileApi;
