import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

function MessagesPage() {
	return <div className={classNames(s.MessagesPage, {}, [])}>MessagesPage component</div>;
}

export default MessagesPage;
