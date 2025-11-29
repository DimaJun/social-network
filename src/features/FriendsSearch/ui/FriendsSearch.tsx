import { Search } from 'lucide-react';

import s from './FriendsSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function FriendsSearch() {
	return (
		<div className={classNames(s.FriendsSearch, {}, [])}>
			<Input
				className={s.input}
				label='Найти друзей'
				placeholder='Введите имя пользователя..'
			/>
			<Button className={s.searchBtn}>
				<Search />
			</Button>
		</div>
	);
}
