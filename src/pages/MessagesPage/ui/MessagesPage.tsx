import s from './MessagesPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function MessagesPage() {
	return <div className={classNames(s.MessagesPage, {}, [])}>MessagesPage component</div>;
}
