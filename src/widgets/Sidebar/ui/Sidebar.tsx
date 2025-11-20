import s from './Sidebar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { routeConfig } from '@/app/router/config/routeConfig';
import { AppLink } from '@/shared/ui/AppLink';

export function Sidebar() {
	return (
		<div className={classNames(s.Sidebar, {}, [])}>
			<div className={s.Links}>
				{Object.values(routeConfig).map((item) => (
					<AppLink
						className={s.link}
						key={item.text}
						path={item.path}
						text={item.text}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	);
}
