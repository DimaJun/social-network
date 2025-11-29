import s from './Messenger.module.scss';

import { ChatMessages, ChatsList, ChatUser } from '@/entities/Chat';
import { SendMessage } from '@/features/SendMessage';
import { FilterChats } from '@/features/FilterChats';

export function Messenger() {
	return (
		<div className={s.Messenger}>
			<ChatUser />
			<ChatsList />
			<SendMessage />
			<FilterChats />
			<ChatMessages />
		</div>
	);
}
