import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { FriendsSearch } from '@/features/FriendsSearch';
import { FriendsList } from '@/entities/Friend';

export function FriendsPage() {
	return (
		<Page className={classNames(s.FriendsPage, {}, [])}>
			<FriendsSearch />
			<FriendsList />
		</Page>
	);
}
