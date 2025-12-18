import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Switch } from '@/shared/ui/Switch';
import { useTheme } from '@/shared/hooks/useTheme/useTheme';

export function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation('settings');

	return (
		<Switch
			checked={theme === 'dark'}
			onCheck={toggleTheme}
			label={t('theme')}
			Icon={theme === 'dark' ? Moon : Sun}
		/>
	);
}
