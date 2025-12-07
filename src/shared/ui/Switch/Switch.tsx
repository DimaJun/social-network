import { LucideIcon } from 'lucide-react';

import s from './Switch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface SwitchProps {
	className?: string;
	checked?: boolean;
	onCheck?: () => void;
	Icon?: LucideIcon;
}

export function Switch(props: SwitchProps) {
	const { className, checked, onCheck, Icon } = props;

	return (
		<div
			className={classNames(s.switch, {}, [className])}
			onClick={onCheck}
		>
			<span className={classNames(s.inner, { [s.checked]: checked }, [])}>
				<Icon className={s.icon} />
			</span>
		</div>
	);
}
