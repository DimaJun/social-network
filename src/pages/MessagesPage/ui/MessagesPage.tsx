import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { MessengerTop } from '@/widgets/Messenger';
import { Page } from '@/widgets/Page';

export function MessagesPage() {
	return (
		<Page className={classNames(s.MessagesPage, {}, [])}>
			<MessengerTop />
		</Page>
	);
}
