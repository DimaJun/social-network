import { House, Users, Mail, ChevronLeftSquare, ChevronRightSquare } from 'lucide-react';
import { useEffect, useState } from 'react';

import s from './Sidebar.module.scss';
import { ISidebarItem, SidebarItem } from './SidebarItem/SidebarItem';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { getFriendsRoute, getMainRoute, getMessengerRoute } from '@/shared/configs/router/router';
import { Button } from '@/shared/ui/Button';
import { LOCAL_STORAGE_SIDEBAR_COLLAPSE } from '@/shared/consts/localstorage';

const sidebarItems: ISidebarItem[] = [
	{
		path: getMainRoute(),
		text: 'Главная',
		Icon: House,
	},
	{
		path: getFriendsRoute(),
		text: 'Друзья',
		Icon: Users,
	},
	{
		path: getMessengerRoute(),
		text: 'Сообщения',
		Icon: Mail,
	},
];

export function Sidebar() {
	const [closed, setClosed] = useState<boolean>(() => {
		const savedValue = localStorage.getItem(LOCAL_STORAGE_SIDEBAR_COLLAPSE);
		return savedValue === 'true';
	});

	const mods: Mods = {
		[s.closed]: closed,
	};

	useEffect(() => {
		document.documentElement.style.setProperty('--sidebar-width', closed ? '80px' : '260px');
		localStorage.setItem(LOCAL_STORAGE_SIDEBAR_COLLAPSE, JSON.stringify(closed));
	}, [closed]);

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
