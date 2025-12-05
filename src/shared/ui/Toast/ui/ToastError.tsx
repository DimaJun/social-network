import { OctagonX } from 'lucide-react';

import { ToastTemplateProps } from '../types/toast';

import s from './Toast.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

export function ToastError({ message }: ToastTemplateProps) {
	return (
		<div className={s.toast}>
			<OctagonX
				className={classNames(s.icon, {}, [s.error])}
				size={30}
			/>
			<p className={s.message}>{message}</p>
		</div>
	);
}
