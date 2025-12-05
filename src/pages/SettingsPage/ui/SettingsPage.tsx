import { Moon, Sun } from 'lucide-react';

import s from './SettingsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

export function SettingsPage() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(s.SettingsPage, {}, [])}>
			<Button onClick={toggleTheme}>{theme === 'dark' ? <Moon /> : <Sun />}</Button>
		</div>
	);
}
