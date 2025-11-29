import s from './ChatCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

export function ChatCard() {
	return (
		<Card className={s.ChatCard}>
			<Avatar
				className={s.avatar}
				size={60}
				rounded
			/>
			<div className={s.info}>
				<h3 className={s.username}>Dima Rui</h3>
				<p className={s.lastMessage}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolor eum
					expedita quaerat quam qui sint totam ut veniam veritatis.
				</p>
			</div>
		</Card>
	);
}
