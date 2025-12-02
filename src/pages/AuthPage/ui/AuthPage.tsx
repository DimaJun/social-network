import s from './AuthPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

export function AuthPage() {
	return <Page className={classNames(s.AuthPage, {}, [])}>AuthPage component</Page>;
}
