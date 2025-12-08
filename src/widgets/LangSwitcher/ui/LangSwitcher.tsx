import { useState } from 'react';

import { Listbox } from '@/shared/ui/ListBox';

const languages = [
	{ value: 'RU', disabled: false },
	{ value: 'UA', disabled: false },
	{ value: 'EN', disabled: false },
];

export function LangSwitcher() {
	const [language, setLanguage] = useState(languages[0].value);

	const handleChange = (value: string) => {
		setLanguage(value);
	};

	return (
		<Listbox
			label='Переключить язык'
			options={languages}
			value={language}
			onChange={handleChange}
		/>
	);
}
