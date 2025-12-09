import s from './SettingsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';

function SettingsPage() {
	return (
		<div className={classNames(s.SettingsPage, {}, [])}>
			<h1 className={s.heading}>Настройки</h1>
			<ThemeSwitcher />
			<LangSwitcher />
		</div>
	);
}

export default SettingsPage;
