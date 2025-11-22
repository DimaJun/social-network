import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FC, ReactNode, SVGProps } from 'react';

import s from './Dropdown.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';
import { Button } from '@/shared/ui/Button';

type DropdownPosition = 'top left' | 'top right' | 'bottom left' | 'bottom right';

interface DropdownItem {
	text: string;
	icon?: FC<SVGProps<SVGSVGElement>>;
	disabled?: boolean;
}

interface DropdownProps {
	className?: string;
	trigger: ReactNode;
	items?: DropdownItem[];
	position?: DropdownPosition;
}

const mapPositionToClass: Record<DropdownPosition, string> = {
	'top left': s.topLeft,
	'top right': s.topRight,
	'bottom left': s.bottomLeft,
	'bottom right': s.bottomRight,
};

export function Dropdown(props: DropdownProps) {
	const { trigger, className, position = 'bottom left', items } = props;

	const positionClass = mapPositionToClass[position];

	return (
		<Menu
			className={s.Menu}
			as='div'
		>
			<MenuButton className={s.trigger}>{trigger}</MenuButton>
			<MenuItems className={classNames(s.items, {}, [className, positionClass])}>
				{items &&
					items.map((item) => (
						<MenuItem
							key={item.text}
							disabled={item.disabled}
						>
							{({ focus }) => (
								<Button
									className={classNames(
										s.item,
										{ [s.disabled]: item.disabled, [s.focus]: focus },
										[]
									)}
									variant='clear'
								>
									{item.icon && <Icon Svg={item.icon} />}
									{item.text}
								</Button>
							)}
						</MenuItem>
					))}
			</MenuItems>
		</Menu>
	);
}
