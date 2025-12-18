import { House, Users, Mail, ChevronLeftSquare, ChevronRightSquare } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import s from './Sidebar.module.scss';
import { ISidebarItem, SidebarItem } from './SidebarItem/SidebarItem';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { getFriendsRoute, getMainRoute, getMessengerRoute } from '@/shared/configs/router/router';
import { Button } from '@/shared/ui/Button';
import { LOCAL_STORAGE_SIDEBAR_COLLAPSE } from '@/shared/consts/localstorage';
import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthenticated } from '@/features/Authorization';

export function Sidebar() {
	const { t } = useTranslation('sidebar');
	const [closed, setClosed] = useState<boolean>(() => {
		const savedValue = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_COLLAPSE);
		return savedValue === 'true';
	});
	const isAuthenticated = useAppSelector(selectIsAuthenticated);

	const mods: Mods = {
		[s.closed]: closed,
	};

	const sidebarItems: ISidebarItem[] = useMemo(
		() => [
			{
				path: getMainRoute(),
				text: t('main'),
				Icon: House,
			},
			{
				path: getFriendsRoute(),
				text: t('friends'),
				Icon: Users,
			},
			{
				path: getMessengerRoute(),
				text: t('messenger'),
				Icon: Mail,
			},
		],
		[t]
	);

	useEffect(() => {
		document.documentElement.style.setProperty('--sidebar-width', closed ? '80px' : '260px');
		localStorage.setItem(LOCAL_STORAGE_SIDEBAR_COLLAPSE, JSON.stringify(closed));
	}, [closed]);

	if (!isAuthenticated) {
		return null;
	}

	return (
		<aside className={classNames(s.Sidebar, mods, [])}>
			<div className={s.links}>
				{sidebarItems.map((item) => (
					<SidebarItem
						key={item.text}
						item={item}
						collapsed={closed}
					/>
				))}
			</div>
			<Button
				className={s.closeBtn}
				onClick={() => setClosed((prev) => !prev)}
			>
				{closed ? <ChevronRightSquare size={36} /> : <ChevronLeftSquare size={36} />}
			</Button>
		</aside>
	);
}
