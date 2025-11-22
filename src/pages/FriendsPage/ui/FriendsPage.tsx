import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { FriendsSearch } from '@/features/FriendsSearch';
import { FriendsList } from '@/entities/Friend';
import { Friend } from '@/entities/Friend/model/types/friend';
import Dima from '@/shared/assets/dima.jpg';

const friend: Friend = {
	firstname: 'Dima',
	lastname: 'Rui',
	avatar: Dima,
	profileLink: '/',
	city: 'Netishyn',
};

const list = new Array(10).fill(friend);

function FriendsPage() {
	return (
		<Page className={classNames(s.FriendsPage, {}, [])}>
			<FriendsSearch />
			<FriendsList items={list} />
		</Page>
	);
}

export default FriendsPage;
