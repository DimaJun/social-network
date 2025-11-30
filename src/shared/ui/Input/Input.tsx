import { Input as HInput, Field, Label, InputProps as HeadlessInputProps } from '@headlessui/react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps extends HeadlessInputProps {
	className?: string;
	labelClass?: string;
	label?: string;
}

export function Input(props: InputProps) {
	const { className, label, labelClass, ...restProps } = props;

	return (
		<Field className={s.wrapper}>
			{label && <Label className={classNames(s.label, {}, [labelClass])}>{label}</Label>}
			<HInput
				className={classNames(s.input, {}, [className])}
				{...restProps}
			/>
		</Field>
	);
}
