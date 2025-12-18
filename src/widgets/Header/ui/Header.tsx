import { CircleUserRound, UserRoundPen, UserStar, Settings, LogOut } from 'lucide-react';
import { useCallback, useMemo } from 'react';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getMainRoute, getProfileRoute, getSettingsRoute } from '@/shared/configs/router/router';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/store';
import {
	authSliceActions,
	selectIsAuthenticated,
	selectUserData,
	useLogoutMutation,
} from '@/features/Authorization';
import { showToast } from '@/shared/lib/toaster/toast';

const { logout } = authSliceActions;

export function Header() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const userData = useAppSelector(selectUserData);
	const dispatch = useAppDispatch();
	const [logoutReq] = useLogoutMutation();

	const onLogout = useCallback(async () => {
		await logoutReq()
			.unwrap()
			.then((data) => {
				showToast.success(data.message);
				dispatch(logout());
			});
	}, [dispatch, logoutReq]);

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
				action: () => onLogout(),
			},
		],
		[onLogout]
	);

	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			<div className={s.right}>
				{userData && (
					<p className={s.greeting}>
						Привет, <span>{userData.username}</span>!
					</p>
				)}
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
		</div>
	);
}
