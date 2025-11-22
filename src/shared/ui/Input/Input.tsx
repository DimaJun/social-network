import { ChangeEvent, InputHTMLAttributes, useId } from 'react';

import s from './Input.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

interface InputProps<T extends string | number = string> extends HTMLInputProps {
	className?: string;
	value?: T;
	onChange?: (value: T) => void;
	readonly?: boolean;
	label?: string;
}

export function Input(props: InputProps) {
	const {
		className,
		value,
		onChange,
		readonly,
		label,
		id: providedId,
		type = 'text',
		placeholder,
		...restProps
	} = props;
	const autoId = useId();
	const inputId = providedId || autoId;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<div className={s.wrapper}>
			{label && (
				<label
					className={s.label}
					htmlFor={inputId}
				>
					{label}
				</label>
			)}
			<input
				className={classNames(s.input, {}, [className])}
				id={inputId}
				value={value}
				type={type}
				onChange={handleChange}
				placeholder={placeholder}
				readOnly={readonly}
				{...restProps}
			/>
		</div>
	);
}
