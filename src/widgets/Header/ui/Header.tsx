import { CircleUserRound, House, UserStar, Settings, LogOut } from 'lucide-react';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getMainRoute } from '@/shared/configs/router/router';

const items = [
	{
		text: 'Главная',
		href: getMainRoute(),
		Icon: House,
	},
	{
		text: 'Админка',
		href: getMainRoute(),
		Icon: UserStar,
	},
	{
		text: 'Настройки',
		href: getMainRoute(),
		Icon: Settings,
	},
	{
		text: 'Выйти',
		Icon: LogOut,
	},
];

export function Header() {
	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			<Dropdown
				className={s.dropdown}
				trigger={
					<CircleUserRound
						className={s.dropdown}
						size={40}
					/>
				}
				items={items}
			/>
		</div>
	);
}
