import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import s from './FriendCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { FriendProfileCard } from '@/entities/Friend/model/types/friend';
import { useAppSelector } from '@/shared/hooks/store';
import { selectUserData } from '@/features/Authorization';

interface FriendCardProps {
	profile?: FriendProfileCard;
}

export function FriendCard({ profile }: FriendCardProps) {
	const { t } = useTranslation('friends');
	const navigate = useNavigate();
	const userData = useAppSelector(selectUserData);
	const { city, username, avatar, id, userId } = profile;

	const onProfileClick = () => {
		if (userData.id === userId) {
			navigate('/profile/my');
		} else {
			navigate(`/profile/${id}`);
		}
	};

	console.log('userData.id:', userData.id, typeof userData.id);
	console.log('userId:', userId, typeof userId);

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
					onClick={onProfileClick}
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
