import { Friend } from '../../model/types/friend';
import { FriendCard } from '../FriendCard/FriendCard';

import s from './FriendsList.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface FriendsListProps {
	className?: string;
	items?: Friend[];
}

export function FriendsList({ className, items }: FriendsListProps) {
	return (
		<div className={classNames(s.List, {}, [className])}>
			{items &&
				items.map((friend) => (
					<FriendCard
						key={friend.avatar}
						friend={friend}
					/>
				))}
		</div>
	);
}
