import { CircleUserRound, UserRoundPen, UserStar, Settings, LogOut } from 'lucide-react';
import { useMemo } from 'react';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getMainRoute, getProfileRoute, getSettingsRoute } from '@/shared/configs/router/router';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/store';
import { authSliceActions, selectIsAuthenticated } from '@/features/Authorization';

const { logout } = authSliceActions;

export function Header() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();

	const items = useMemo(
		() => [
			{
				text: 'Профиль',
				href: getProfileRoute(),
				Icon: UserRoundPen,
			},
			{
				text: 'Админка',
				href: getMainRoute(),
				Icon: UserStar,
			},
			{
				text: 'Настройки',
				href: getSettingsRoute(),
				Icon: Settings,
			},
			{
				text: 'Выйти',
				Icon: LogOut,
				action: () => dispatch(logout()),
			},
		],
		[dispatch]
	);

	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			<Dropdown
				className={classNames(s.dropdown, { [s.loggined]: isAuthenticated }, [])}
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
