import s from './ChatHeader.module.scss';

import { Avatar } from '@/shared/ui/Avatar';

export function ChatHeader() {
	return (
		<div className={s.header}>
			<Avatar
				size={50}
				rounded
			/>
			<div className={s.info}>
				<p className={s.username}>Dima Rui</p>
				<p className={s.online}>online</p>
			</div>
		</div>
	);
}
