import { BellRing } from 'lucide-react';

import { ToastTemplateProps } from '../types/toast';

import s from './Toast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function ToastNotification({ message }: ToastTemplateProps) {
	return (
		<div className={s.toast}>
			<BellRing
				className={classNames(s.icon, {}, [s.notification])}
				size={30}
			/>
			<p className={s.message}>{message}</p>
		</div>
	);
}
