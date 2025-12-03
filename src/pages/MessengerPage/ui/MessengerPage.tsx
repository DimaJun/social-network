import s from './MessengerPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ChatHeader, ChatsList } from '@/entities/Chat';
import { ChatsFilters } from '@/features/ChatsFilters';

export function MessengerPage() {
	return (
		<Page className={classNames(s.MessengerPage, {}, [])}>
			<ChatHeader />
			<ChatsFilters />
			<ChatsList />
		</Page>
	);
}
