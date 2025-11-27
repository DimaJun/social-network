import { Link } from 'react-router';
import { FC } from 'react';

import s from './AppLink.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface AppLinkProps {
	className?: string;
	path?: string;
	Icon?: FC;
	text?: string;
}

export function AppLink(props: AppLinkProps) {
	const { className, Icon, path, text } = props;

	return (
		<Link
			className={classNames(s.AppLink, {}, [className])}
			to={path}
		>
			{Icon && <Icon />}
			{text && <p>{text}</p>}
		</Link>
	);
}
