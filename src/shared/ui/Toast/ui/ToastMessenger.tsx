import { MailPlus } from 'lucide-react';

import { ToastTemplateProps } from '../types/toast';

import s from './Toast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function ToastMessenger({ message }: ToastTemplateProps) {
	return (
		<div className={s.toast}>
			<MailPlus
				className={classNames(s.icon, {}, [s.messenger])}
				size={30}
			/>
			<p className={s.message}>{message}</p>
		</div>
	);
}
