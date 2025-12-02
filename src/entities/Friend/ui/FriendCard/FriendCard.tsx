import s from './FriendCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';

export function FriendCard() {
	return (
		<Card
			className={s.card}
			padding='16'
		>
			<div className={s.details}>
				<Avatar size={80} />
				<div className={s.info}>
					<p className={s.isFriend}>Не ваш друг</p>
					<p className={s.username}>Dima Rui</p>
					<p className={s.city}>Netishyn</p>
				</div>
			</div>
			<div className={s.actions}>
				<Button
					className={s.action}
					variant='outline'
				>
					Профиль
				</Button>
				<Button
					className={s.action}
					variant='outline'
				>
					Написать
				</Button>
				<Button
					className={s.action}
					variant='outline'
				>
					Добавить в друзья
				</Button>
			</div>
		</Card>
	);
}
