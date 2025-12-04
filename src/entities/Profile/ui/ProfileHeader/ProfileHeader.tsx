import s from './ProfileHeader.module.scss';

import { Avatar } from '@/shared/ui/Avatar';

export function ProfileHeader() {
	return (
		<header className={s.header}>
			<Avatar
				className={s.avatar}
				size={280}
				rounded
			/>
			<div className={s.info}>
				<p className={s.username}>Dima Rui</p>
				<p className={s.online}>online</p>
				<p className={s.age}>
					<span>Возраст:</span> 21
				</p>
				<div className={s.divider} />
				<p className={s.city}>
					<span>Город:</span> Киев, Украина
				</p>
				<div className={s.divider} />
				<p className={s.nation}>
					<span>Национальность:</span> Украина
				</p>
				<div className={s.divider} />
			</div>
		</header>
	);
}
