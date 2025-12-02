import s from './MessengerPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

export function MessengerPage() {
	return <Page className={classNames(s.MessengerPage, {}, [])}>MessengerPage component</Page>;
}
