import s from './MessengerPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ChatHeader } from '@/entities/Chat';
import { ChatsList } from '@/entities/Chat/ui/ChatsList/ChatsList';

export function MessengerPage() {
	return (
		<Page className={classNames(s.MessengerPage, {}, [])}>
			<ChatHeader />
			<ChatsList />
		</Page>
	);
}
