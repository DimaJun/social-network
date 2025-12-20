import { useTranslation } from 'react-i18next';

import s from './FriendCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { FriendProfileCard } from '@/entities/Friend/model/types/friend';

interface FriendCardProps {
	profile?: FriendProfileCard;
}

export function FriendCard({ profile }: FriendCardProps) {
	const { t } = useTranslation('friends');
	const { city, username, avatar } = profile;

	return (
		<Card
			className={s.card}
			padding='16'
		>
			<div className={s.details}>
				<Avatar
					size={80}
					rounded
					src={avatar ?? undefined}
				/>
				<div className={s.info}>
					<p className={s.isFriend}>{t('not-your-friend')}</p>
					<p className={s.username}>{username}</p>
					{city && <p className={s.city}>{city}</p>}
				</div>
			</div>
			<div className={s.actions}>
				<Button
					className={s.action}
					variant='outline'
				>
					{t('profile')}
				</Button>
				<Button
					className={s.action}
					variant='outline'
				>
					{t('send-message')}
				</Button>
				<Button
					className={s.action}
					variant='outline'
				>
					{t('add-to-friends')}
				</Button>
			</div>
		</Card>
	);
}
