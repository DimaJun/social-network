import { House, Users, Mail } from 'lucide-react';

import s from './Sidebar.module.scss';
import { ISidebarItem, SidebarItem } from './SidebarItem/SidebarItem';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { getFriendsRoute, getMainRoute, getMessengerRoute } from '@/shared/configs/router/router';

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
	return (
		<aside className={classNames(s.Sidebar, {}, [])}>
			<div className={s.links}>
				{sidebarItems.map((item) => (
					<SidebarItem
						key={item.text}
						item={item}
					/>
				))}
			</div>
		</aside>
	);
}
