import { useTranslation } from 'react-i18next';

import s from './SettingsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';

function SettingsPage() {
	const { t } = useTranslation('settings');

	return (
		<div className={classNames(s.SettingsPage, {}, [])}>
			<h1 className={s.heading}>{t('settings')}</h1>
			<ThemeSwitcher />
			<LangSwitcher />
		</div>
	);
}

export default SettingsPage;
