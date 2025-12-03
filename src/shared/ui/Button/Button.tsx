import { ButtonHTMLAttributes } from 'react';

import s from './Button.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type ButtonVariant = 'clear' | 'outline' | 'background';

const mapVariantToClass: Record<ButtonVariant, string> = {
	clear: s.clear,
	outline: s.outline,
	background: s.background,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
	const {
		className,
		variant = 'clear',
		type = 'button',
		children,
		disabled,
		...otherProps
	} = props;

	const variantClass = mapVariantToClass[variant];

	return (
		<button
			className={classNames(s.button, {}, [className, variantClass])}
			type={type}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
}
