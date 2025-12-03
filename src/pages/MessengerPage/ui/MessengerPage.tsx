import s from './MessengerPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ChatHeader, ChatsList } from '@/entities/Chat';
import { ChatsFilters } from '@/features/ChatsFilters';
import { SendMessage } from '@/features/SendMessage';
import { MessagesList } from '@/entities/Message';

export function MessengerPage() {
	return (
		<Page className={classNames(s.MessengerPage, {}, [])}>
			<ChatHeader />
			<ChatsFilters />
			<ChatsList />
			<MessagesList />
			<SendMessage />
		</Page>
	);
}
