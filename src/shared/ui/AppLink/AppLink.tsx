import { Link } from 'react-router';
import { ReactNode } from 'react';

import s from './AppLink.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

interface AppLinkProps {
	className?: string;
	children: ReactNode;
	href?: string;
	disabled?: boolean;
	onClick?: () => void;
}

export function AppLink(props: AppLinkProps) {
	const { className, children, href, disabled, onClick } = props;

	const mods: Mods = {
		[s.disabled]: disabled,
	};

	return (
		<Link
			className={classNames(s.link, mods, [className])}
			to={href}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
