import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';

import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { FriendsSearch } from '@/features/FriendsSearch';
import { FriendsList } from '@/entities/Friend';
import { useGetFriendsByUsernameQuery } from '@/entities/Friend/api/friend';
import { useDebounce } from '@/shared/hooks/useDebounce';

function FriendsPage() {
	const [search, setSearch] = useSearchParams();
	const [query, setQuery] = useState(search.get('search') || '');
	const debouncedQuery = useDebounce(query, 500);
	const { data: friends } = useGetFriendsByUsernameQuery(debouncedQuery);

	useEffect(() => {
		if (query) {
			setSearch({ search: query });
		} else {
			setSearch({});
		}
	}, [query, setSearch]);

	return (
		<Page className={classNames(s.FriendsPage, {}, [])}>
			<FriendsSearch
				query={query}
				setQuery={setQuery}
			/>
			<FriendsList friends={friends} />
		</Page>
	);
}

export default FriendsPage;
