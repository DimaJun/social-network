import { baseApi } from '@/shared/configs/api';
import { FriendProfileCard } from '@/entities/Friend/model/types/friend';

const friendApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getFriendsByUsername: build.query<FriendProfileCard[], string>({
			query: (username) => ({
				url: '/profile',
				method: 'GET',
				params: { search: username },
			}),
		}),
	}),
});

export const { useGetFriendsByUsernameQuery } = friendApi;
