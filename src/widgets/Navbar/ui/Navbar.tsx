import { UserRoundPen, UserStar, LogOut, Settings } from 'lucide-react';

import s from './Navbar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { DropdownItem } from '@/shared/ui/Dropdown/Dropdown';
import { Avatar } from '@/shared/ui/Avatar';

const items: DropdownItem[] = [
	{
		content: 'Профиль',
		disabled: false,
		onClick: () => alert('Профиль'),
		Icon: UserRoundPen,
	},
	{
		content: 'Админка',
		disabled: false,
		onClick: () => alert('Админка'),
		Icon: UserStar,
	},
	{
		content: 'Настройки',
		disabled: false,
		onClick: () => alert('Настройки'),
		Icon: Settings,
	},
	{
		content: 'Выйти',
		disabled: false,
		onClick: () => alert('Выйти'),
		Icon: LogOut,
	},
];

export function Navbar() {
	return (
		<div className={classNames(s.Navbar, {}, [])}>
			<div className={s.logo}>Whisper</div>
			<Dropdown
				className={s.dropdown}
				items={items}
				trigger={<Avatar size={32} />}
			/>
		</div>
	);
}
