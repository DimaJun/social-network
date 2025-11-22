import { Friend } from '../../model/types/friend';

import s from './FriendCard.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Button } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';

interface FriendCardProps {
	className?: string;
	friend?: Friend;
}

export function FriendCard({ className, friend }: FriendCardProps) {
	const { firstname, lastname, avatar, city, profileLink } = friend;

	return (
		<div className={classNames(s.card, {}, [className])}>
			<Avatar
				src={avatar}
				size={93}
				rounded
			/>
			<div className={s.wrapper}>
				<div className={s.info}>
					<p className={s.username}>
						{firstname} {lastname}
					</p>
					<p className={s.city}>{city}</p>
				</div>
				<div className={s.actions}>
					<Button>Добавить в друзья</Button>
					<AppLink
						path={profileLink}
						text='Посетить профиль'
					/>
				</div>
			</div>
		</div>
	);
}
