import s from './FriendCard.module.scss';

import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

export function FriendCard() {
	return (
		<Card
			className={s.friendCard}
			padding={16}
		>
			<div className={s.info}>
				<Avatar
					size={70}
					rounded
				/>
				<div className={s.text}>
					<h3 className={s.username}>
						Dima Rui <span className={s.isFriend}>Не ваш друг</span>
					</h3>
					<p className={s.city}>Netishyn</p>
				</div>
			</div>
			<div className={s.actions}>
				<Button className={s.profile}>Профиль</Button>
				<Button className={s.write}>Написать</Button>
				<Button className={s.addToFriends}>Добавить в друзья</Button>
			</div>
		</Card>
	);
}
