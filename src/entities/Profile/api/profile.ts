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
		getProfileById: build.query<Profile, { id: string }>({
			query: ({ id }) => ({
				url: `/profile/${id}`,
				method: 'GET',
			}),
		}),
	}),
});

export const { useLazyGetMyProfileQuery } = profileApi;
export const { useLazyGetProfileByIdQuery } = profileApi;
