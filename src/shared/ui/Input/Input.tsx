import { Input as HInput, Field, Label } from '@headlessui/react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface InputProps {
	className?: string;
	placeholder?: string;
	label?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export function Input(props: InputProps) {
	const { className, label, value, onChange, placeholder } = props;

	return (
		<Field className={className}>
			{label && <Label className={s.label}>{label}</Label>}
			<HInput
				className={classNames(s.input, {}, [])}
				value={value}
				onChange={(e) => onChange?.(e.target.value)}
				placeholder={placeholder}
			/>
		</Field>
	);
}
