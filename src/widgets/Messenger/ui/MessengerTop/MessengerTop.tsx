import s from './MessengerTop.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';

export function MessengerTop() {
	return (
		<div className={classNames(s.header, {}, [])}>
			<Avatar
				size={50}
				rounded
			/>
			<div className={s.info}>
				<h3 className={s.username}>Dima Rui</h3>
				<p className={s.status}>online</p>
			</div>
		</div>
	);
}

// Messages:
// entities: Message (MessageBlock), Chat (ChatCard, ChatsList, ChatUser), User
// features: SendMessage (Input&Button), FilterChats (Filter by: Group/Direct chats)
// widgets: Messenger (contains all the blocks needed for the page, built by a grid system)
