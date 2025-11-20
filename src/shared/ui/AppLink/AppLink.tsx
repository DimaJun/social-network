import { FC, SVGProps } from 'react';
import { Link } from 'react-router';

import s from './AppLink.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Icon } from '@/shared/ui/Icon';

interface AppLinkProps {
	className?: string;
	path: string;
	text: string;
	icon?: FC<SVGProps<SVGSVGElement>>;
}

export function AppLink(props: AppLinkProps) {
	const { icon, path, text, className } = props;

	return (
		<Link
			className={classNames(s.Link, {}, [className])}
			to={path}
		>
			<div className={s.linkContent}>
				{icon && (
					<Icon
						Svg={icon}
						width={20}
						height={20}
					/>
				)}
				<p>{text}</p>
			</div>
		</Link>
	);
}
