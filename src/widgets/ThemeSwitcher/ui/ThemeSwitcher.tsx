import { Moon, Sun } from 'lucide-react';

import { Switch } from '@/shared/ui/Switch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();

	return (
		<Switch
			checked={theme === 'dark'}
			onCheck={toggleTheme}
			label='Переключить тему'
			Icon={theme === 'dark' ? Moon : Sun}
		/>
	);
}
