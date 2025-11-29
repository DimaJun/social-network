import s from './ChatUser.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';

export function ChatUser() {
	return (
		<div className={classNames(s.header, {}, [])}>
			<Avatar
				size={50}
				rounded
			/>
			<div className={s.info}>
				<h3 className={s.username}>Dima Rui</h3>
				<p className={s.status}>online</p>
			</div>
		</div>
	);
}
