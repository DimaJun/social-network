import s from './ChatCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

export function ChatCard() {
	return (
		<Card
			className={s.card}
			padding='8'
		>
			<Avatar
				className={s.avatar}
				size={55}
				rounded
			/>
			<div className={s.info}>
				<p className={s.username}>Dima Rui</p>
				<p className={s.lastMessage}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore
					dolores enim eum iste minima neque non rerum veritatis, voluptate!
				</p>
			</div>
		</Card>
	);
}
