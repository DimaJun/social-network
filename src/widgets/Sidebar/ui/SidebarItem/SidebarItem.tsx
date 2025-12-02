import { NavLink } from 'react-router';
import { LucideIcon } from 'lucide-react';

import s from './SidebarItem.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export interface ISidebarItem {
	path: string;
	text: string;
	Icon: LucideIcon;
}

interface SidebarItemProps {
	className?: string;
	item: ISidebarItem;
}

export function SidebarItem({ className, item }: SidebarItemProps) {
	const { path, text, Icon } = item;

	return (
		<NavLink
			className={({ isActive }) => classNames(s.link, { [s.active]: isActive }, [className])}
			to={path}
		>
			<Icon />
			{text}
		</NavLink>
	);
}
