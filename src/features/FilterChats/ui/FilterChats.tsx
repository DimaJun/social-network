import s from './FilterChats.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export function FilterChats() {
	return (
		<div className={classNames(s.FilterChats, {}, [])}>
			<Button className={s.filterBtn}>Личные</Button>
			<Button className={s.filterBtn}>Группы</Button>
		</div>
	);
}
