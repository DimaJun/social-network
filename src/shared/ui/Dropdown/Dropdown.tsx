import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

import s from './Dropdown.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

type DropdownAnchor = 'top start' | 'top end' | 'bottom start' | 'bottom end';

const mapAnchorToClass: Record<DropdownAnchor, string> = {
	'top start': s.topStart,
	'top end': s.topEnd,
	'bottom start': s.bottomStart,
	'bottom end': s.bottomEnd,
};

interface DropdownItem {
	text?: string;
	href?: string;
	Icon?: LucideIcon;
}

interface DropdownProps {
	className?: string;
	trigger: ReactNode;
	items?: DropdownItem[];
	anchor?: DropdownAnchor;
}

export function Dropdown(props: DropdownProps) {
	const { className, items, anchor = 'bottom start', trigger } = props;

	const anchorClass = mapAnchorToClass[anchor];

	return (
		<Menu
			className={classNames(s.menu, {}, [className])}
			as='div'
		>
			<MenuButton
				className={s.trigger}
				as={Button}
			>
				{trigger}
			</MenuButton>
			<MenuItems className={classNames(s.dropdown, {}, [anchorClass])}>
				{items &&
					items.map((item, index) => (
						<MenuItem key={`dropdown-item-${index}`}>
							{({ focus, close }) =>
								item.href ? (
									<AppLink
										className={classNames(s.item, { [s.focus]: focus }, [])}
										href={item.href}
										onClick={close}
									>
										{item.Icon && <item.Icon className={s.icon} />}
										{item.text}
									</AppLink>
								) : (
									<Button
										className={classNames(s.item, { [s.focus]: focus }, [])}
										onClick={close}
									>
										{item.Icon && <item.Icon className={s.icon} />}
										{item.text}
									</Button>
								)
							}
						</MenuItem>
					))}
			</MenuItems>
		</Menu>
	);
}
