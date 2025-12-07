import { Moon, Sun } from 'lucide-react';

import s from './SettingsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';
import { Switch } from '@/shared/ui/Switch';

export function SettingsPage() {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames(s.SettingsPage, {}, [])}>
			<Switch
				checked={theme === 'dark'}
				onCheck={toggleTheme}
				Icon={theme === 'dark' ? Moon : Sun}
			/>
		</div>
	);
}
