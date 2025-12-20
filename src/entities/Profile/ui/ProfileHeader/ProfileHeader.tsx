import { useTranslation } from 'react-i18next';

import { Profile } from '../../model/types/profile';

import s from './ProfileHeader.module.scss';

import { Avatar } from '@/shared/ui/Avatar';

interface ProfileHeaderProps {
	profile?: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
	const { t } = useTranslation('profile');

	if (!profile) return null;

	const { username, age, city, nationality, avatar } = profile;
	return (
		<header className={s.header}>
			<Avatar
				className={s.avatar}
				size={280}
				src={avatar}
				rounded
			/>
			<div className={s.info}>
				<p className={s.username}>{username}</p>
				<p className={s.online}>online</p>
				<p className={s.age}>
					<span>{t('age')}:</span> {age ? age : 'Не указано'}
				</p>
				<div className={s.divider} />
				<p className={s.city}>
					<span>{t('city')}:</span> {city ? city : 'Не указано'}
				</p>
				<div className={s.divider} />
				<p className={s.nation}>
					<span>{t('nationality')}:</span> {nationality ? nationality : 'Не указано'}
				</p>
				<div className={s.divider} />
			</div>
		</header>
	);
}
