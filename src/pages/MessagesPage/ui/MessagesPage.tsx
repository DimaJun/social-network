import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { Messenger } from '@/widgets/Messenger';

export function MessagesPage() {
	return (
		<Page className={classNames(s.MessagesPage, {}, [])}>
			<Messenger />
		</Page>
	);
}
