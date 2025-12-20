import { FriendCard } from '../FriendCard/FriendCard';

import s from './FriendsList.module.scss';

import { FriendProfileCard } from '@/entities/Friend/model/types/friend';

interface FriendsListProps {
	friends?: FriendProfileCard[];
}

export function FriendsList({ friends }: FriendsListProps) {
	return (
		<div className={s.list}>
			{friends.length > 0 ? (
				friends.map((friend) => (
					<FriendCard
						key={friend.username}
						profile={friend}
					/>
				))
			) : (
				<p className={s.not_found}>Пользователи не найдены.</p>
			)}
		</div>
	);
}
