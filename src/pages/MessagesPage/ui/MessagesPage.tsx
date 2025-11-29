import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ChatsList, ChatUser } from '@/entities/Chat';

export function MessagesPage() {
	return (
		<Page className={classNames(s.MessagesPage, {}, [])}>
			<ChatUser />
			<ChatsList />
		</Page>
	);
}
