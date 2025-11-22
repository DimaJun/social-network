import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

function MessagesPage() {
	return <Page className={classNames(s.MessagesPage, {}, [])}>MessagesPage component</Page>;
}

export default MessagesPage;
