import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

export function FriendsPage() {
	return <Page className={classNames(s.FriendsPage, {}, [])}>FriendsPage component</Page>;
}
