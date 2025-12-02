import { CircleUserRound } from 'lucide-react';

import s from './Header.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function Header() {
	return (
		<div className={classNames(s.Header, {}, [])}>
			<p className={s.logo}>Whisper</p>
			<CircleUserRound
				className={s.dropdown}
				size={40}
			/>
		</div>
	);
}
