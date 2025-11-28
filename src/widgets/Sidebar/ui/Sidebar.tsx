import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

import s from './Sidebar.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { routes } from '@/shared/configs/router/router';
import { Button } from '@/shared/ui/Button';

export function Sidebar() {
	const [closed, setClosed] = useState(false);

	useEffect(() => {
		document.documentElement.style.setProperty('--sidebar-width', closed ? '70px' : '250px');
	}, [closed]);

	const mods: Mods = {
		[s.closed]: closed,
	};

	return (
		<div className={classNames(s.Sidebar, mods, [])}>
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
						{text && <p className={s.text}>{text}</p>}
					</NavLink>
				))}
			</div>
			<Button
				className={s.closeBtn}
				onClick={() => setClosed((prev) => !prev)}
			>
				{closed ? <ChevronsRight size={32} /> : <ChevronsLeft size={32} />}
			</Button>
		</div>
	);
}
