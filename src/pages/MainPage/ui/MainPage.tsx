import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

export function MainPage() {
	return <Page className={classNames(s.MainPage, {}, [])}>MainPage component</Page>;
}
