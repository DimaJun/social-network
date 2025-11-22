import { ButtonHTMLAttributes, ReactNode } from 'react';

import s from './Button.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type ButtonVariant = 'clear' | 'outline' | 'background';

const mapVariantToClass: Record<ButtonVariant, string> = {
	clear: s.clear,
	background: s.background,
	outline: s.outline,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	variant?: ButtonVariant;
}

export function Button(props: ButtonProps) {
	const {
		className,
		children,
		variant = 'outline',
		type = 'button',
		disabled,
		...restProps
	} = props;

	const variantClass = mapVariantToClass[variant];

	return (
		<button
			className={classNames(s.Button, {}, [className, variantClass])}
			type={type}
			disabled={disabled}
			{...restProps}
		>
			{children}
		</button>
	);
}
