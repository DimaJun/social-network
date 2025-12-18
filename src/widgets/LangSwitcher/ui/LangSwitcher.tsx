import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Listbox } from '@/shared/ui/ListBox';

const languages = [
	{ value: 'ru', label: 'RU', disabled: false },
	{ value: 'uk', label: 'UA', disabled: false },
	{ value: 'en', label: 'EN', disabled: false },
];

export function LangSwitcher() {
	const { t, i18n } = useTranslation('settings');
	const [language, setLanguage] = useState(i18n.language);

	const handleChange = async (value: string) => {
		setLanguage(value);
		await i18n.changeLanguage(value);
	};

	return (
		<Listbox
			label={t('switchlanguage')}
			options={languages}
			value={language}
			onChange={handleChange}
		/>
	);
}
