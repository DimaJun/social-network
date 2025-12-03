import s from './ChatsFilters.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export function ChatsFilters() {
	return (
		<div className={classNames(s.ChatsFilters, {}, [])}>
			<Button
				className={s.action}
				variant='background'
			>
				Личные
			</Button>
			<Button
				className={s.action}
				variant='background'
			>
				Группы
			</Button>
		</div>
	);
}
