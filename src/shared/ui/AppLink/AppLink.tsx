import { Link } from 'react-router';
import { FC, ReactNode } from 'react';

import s from './AppLink.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

interface AppLinkProps {
	className?: string;
	path?: string;
	Icon?: FC;
	children?: ReactNode;
	disabled?: boolean;
}

export function AppLink(props: AppLinkProps) {
	const { className, Icon, path, children, disabled } = props;

	const mods: Mods = {
		[s.disabled]: disabled,
	};

	return (
		<Link
			className={classNames(s.AppLink, mods, [className])}
			to={path}
		>
			{Icon && <Icon />}
			{children && <p>{children}</p>}
		</Link>
	);
}
