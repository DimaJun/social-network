import { FileScanIcon, NotebookIcon } from 'lucide-react';

import s from './Navbar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/Dropdown';

const items: DropdownItem[] = [
	{
		content: 'Главная',
		disabled: false,
		onClick: () => alert('Main'),
		Icon: FileScanIcon,
	},
	{
		content: 'Отсоси',
		disabled: false,
		onClick: () => alert('Отсоси'),
		Icon: FileScanIcon,
	},
	{
		content: 'Уходи',
		disabled: true,
		onClick: () => alert('Уходи'),
		Icon: FileScanIcon,
	},
];

export function Navbar() {
	return (
		<div className={classNames(s.Navbar, {}, [])}>
			<div className={s.logo}>Whisper</div>
			<Dropdown
				className={s.dropdown}
				items={items}
				trigger={<NotebookIcon />}
			/>
		</div>
	);
}
