import s from './Navbar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import VibenetLogo from '@/shared/assets/icons/vibenet-logo.svg';
import UserIcon from '@/shared/assets/icons/user-icon.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import AdminIcon from '@/shared/assets/icons/admin.svg';
import SettingsIcon from '@/shared/assets/icons/settings.svg';
import LogoutIcon from '@/shared/assets/icons/logout.svg';
import { Dropdown } from '@/shared/ui/Dropdown';

const items = [
	{
		text: 'Профиль',
		icon: ProfileIcon,
	},
	{
		text: 'Админ панель',
		icon: AdminIcon,
	},
	{
		text: 'Настройки',
		icon: SettingsIcon,
	},
	{
		text: 'Выйти',
		icon: LogoutIcon,
	},
];

export function Navbar() {
	return (
		<div className={classNames(s.Navbar, {}, [])}>
			<div className={s.logo}>
				<Icon
					Svg={VibenetLogo}
					width={60}
					height={60}
				/>
				<p>Vibenet</p>
			</div>
			<div className={s.right}>
				<Dropdown
					trigger={
						<Icon
							Svg={UserIcon}
							width={30}
							height={30}
						/>
					}
					items={items}
				/>
			</div>
		</div>
	);
}
