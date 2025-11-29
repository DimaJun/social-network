import s from './ChatsList.module.scss';

import { ChatCard } from '@/entities/Chat/ui/ChatCard/ChatCard';

export function ChatsList() {
	return (
		<div className={s.list}>
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
			<ChatCard />
		</div>
	);
}
