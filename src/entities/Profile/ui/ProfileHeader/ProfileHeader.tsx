import { useTranslation } from 'react-i18next';

import s from './ProfileHeader.module.scss';

import { Avatar } from '@/shared/ui/Avatar';

export function ProfileHeader() {
	const { t } = useTranslation('profile');
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
					<span>{t('age')}:</span> 21
				</p>
				<div className={s.divider} />
				<p className={s.city}>
					<span>{t('city')}:</span> Киев, Украина
				</p>
				<div className={s.divider} />
				<p className={s.nation}>
					<span>{t('nationality')}:</span> Украина
				</p>
				<div className={s.divider} />
			</div>
		</header>
	);
}
