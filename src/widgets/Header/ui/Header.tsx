import { CircleUserRound, UserRoundPen, UserStar, Settings, LogOut } from 'lucide-react';
import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Dropdown } from '@/shared/ui/Dropdown';
import { getMainRoute, getMyProfileRoute, getSettingsRoute } from '@/shared/configs/router/router';
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
	const { t } = useTranslation('header');
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const userData = useAppSelector(selectUserData);
	const dispatch = useAppDispatch();
	const [logoutReq] = useLogoutMutation();

	const onLogout = useCallback(async () => {
		if (userData) {
			await logoutReq()
				.unwrap()
				.then(() => {
					showToast.success(t('success-logout'));
					dispatch(logout());
				});
		}
	}, [dispatch, logoutReq, t, userData]);

	const items = useMemo(
		() => [
			{
				text: t('profile'),
				href: getMyProfileRoute(),
				Icon: UserRoundPen,
			},
			{
				text: t('admin'),
				href: getMainRoute(),
				Icon: UserStar,
			},
			{
				text: t('settings'),
				href: getSettingsRoute(),
				Icon: Settings,
			},
			{
				text: t('logout'),
				Icon: LogOut,
				action: () => onLogout(),
			},
		],
		[onLogout, t]
	);

	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			<div className={s.right}>
				{userData && (
					<p className={s.greeting}>
						{t('greeting')}, <span>{userData.username}</span>!
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
