import { useTranslation } from 'react-i18next';

import s from './FriendCard.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';

export function FriendCard() {
	const { t } = useTranslation('friends');

	return (
		<Card
			className={s.card}
			padding='16'
		>
			<div className={s.details}>
				<Avatar size={80} />
				<div className={s.info}>
					<p className={s.isFriend}>{t('not-your-friend')}</p>
					<p className={s.username}>Dima Rui</p>
					<p className={s.city}>Netishyn</p>
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
