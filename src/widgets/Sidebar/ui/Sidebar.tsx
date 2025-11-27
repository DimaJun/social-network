import { NavLink } from 'react-router';

import s from './Sidebar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { routes } from '@/shared/configs/router/router';

export function Sidebar() {
	return (
		<div className={classNames(s.Sidebar, {}, [])}>
			<div className={s.links}>
				{Object.entries(routes).map(([_, { Icon, route, text }]) => (
					<NavLink
						className={({ isActive }) =>
							classNames(s.link, { [s.active]: isActive }, [])
						}
						key={text}
						to={route}
					>
						{Icon && <Icon />}
						{text && <p>{text}</p>}
					</NavLink>
				))}
			</div>
		</div>
	);
}
