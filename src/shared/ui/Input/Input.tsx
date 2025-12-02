import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type TypedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends TypedInputProps {
	className?: string;
	labelClass?: string;
	value?: string;
	onChange?: (value: string) => void;
	label?: string;
}

export function Input(props: InputProps) {
	const {
		className,
		labelClass,
		value,
		onChange,
		label,
		type = 'text',
		disabled = false,
		required = false,
		...otherProps
	} = props;

	if (!label) {
		return (
			<input
				className={classNames(s.input, {}, [className])}
				type={type}
				value={value}
				onChange={(e) => onChange(e?.target?.value)}
				disabled={disabled}
				required={required}
				{...otherProps}
			/>
		);
	}

	return (
		<label className={s.label}>
			<span className={labelClass}>{label}</span>
			<input
				className={classNames(s.input, {}, [className])}
				type={type}
				value={value}
				onChange={(e) => onChange(e?.target?.value)}
				disabled={disabled}
				required={required}
				{...otherProps}
			/>
		</label>
	);
}
