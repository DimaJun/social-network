import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { FC, ReactNode } from 'react';

import s from './Dropdown.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

type DropdownAnchor = 'top start' | 'top end' | 'bottom start' | 'bottom end';

const mapAnchorToClass: Record<DropdownAnchor, string> = {
	'top end': s.topEnd,
	'top start': s.topStart,
	'bottom end': s.bottomEnd,
	'bottom start': s.bottomStart,
};

export interface DropdownItem {
	onClick?: () => void;
	content?: ReactNode;
	Icon?: FC;
	disabled?: boolean;
}

interface DropdownProps {
	className?: string;
	items?: DropdownItem[];
	trigger?: ReactNode;
	anchor?: DropdownAnchor;
}

export function Dropdown(props: DropdownProps) {
	const { className, items, trigger, anchor = 'bottom start' } = props;

	const anchorClass = mapAnchorToClass[anchor];

	return (
		<Menu
			className={classNames(s.menu, {}, [className])}
			as={'div'}
		>
			<MenuButton className={s.trigger}>{trigger}</MenuButton>
			<MenuItems className={classNames(s.menuItems, {}, [anchorClass])}>
				{items &&
					items.map((item, index) => {
						const { onClick, content, Icon, disabled } = item;

						return (
							<MenuItem
								key={`dropdown-item-${index}`}
								disabled={disabled}
							>
								{({ focus }) => (
									<Button
										className={classNames(s.item, { [s.focus]: focus }, [])}
										disabled={disabled}
										onClick={onClick}
									>
										{Icon && <Icon />}
										{content}
									</Button>
								)}
							</MenuItem>
						);
					})}
			</MenuItems>
		</Menu>
	);
}
