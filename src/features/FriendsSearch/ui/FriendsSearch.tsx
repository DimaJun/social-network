import s from './FriendsSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';

export function FriendsSearch() {
	return (
		<Input
			className={classNames(s.FriendsSearch, {}, [])}
			labelClass={s.label}
			label='Найти друзей'
			placeholder='Введите имя пользователя..'
		/>
	);
}
