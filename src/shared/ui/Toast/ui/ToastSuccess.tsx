import { CircleCheck } from 'lucide-react';

import { ToastTemplateProps } from '../types/toast';

import s from './Toast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function ToastSuccess({ message }: ToastTemplateProps) {
	return (
		<div className={s.toast}>
			<CircleCheck
				className={classNames(s.icon, {}, [s.success])}
				size={30}
			/>
			<p className={s.message}>{message}</p>
		</div>
	);
}
