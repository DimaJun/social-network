import { UserRoundPlus } from 'lucide-react';

import { ToastTemplateProps } from '../types/toast';

import s from './Toast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function ToastFriendRequest({ message }: ToastTemplateProps) {
	return (
		<div className={s.toast}>
			<UserRoundPlus
				className={classNames(s.icon, {}, [s.friend])}
				size={30}
			/>
			<p className={s.message}>{message}</p>
		</div>
	);
}
