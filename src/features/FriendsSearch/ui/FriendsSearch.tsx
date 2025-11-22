import { useState } from 'react';

import s from './FriendsSearch.module.scss';

import { Input } from '@/shared/ui/Input';
import { classNames } from '@/shared/helpers/classNames/classNames';

export function FriendsSearch() {
	const [value, setValue] = useState('');

	return (
		<div className={classNames(s.wrapper, {}, [])}>
			<h1 className={s.header}>Поиск друзей</h1>
			<Input
				placeholder='Начните вводить...'
				value={value}
				onChange={setValue}
			/>
		</div>
	);
}
