import { useTranslation } from 'react-i18next';

import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

export function MainPage() {
	const { t } = useTranslation('main');

	return <Page className={classNames(s.MainPage, {}, [])}>{t('Mainpage')}</Page>;
}
