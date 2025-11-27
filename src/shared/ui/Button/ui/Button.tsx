import { ButtonHTMLAttributes, ReactNode } from 'react';

import s from './Button.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
}

export function Button(props: ButtonProps) {
	const { className, children, type = 'button', ...otherProps } = props;

	return (
		<button
			className={classNames(s.Button, {}, [className])}
			type={type}
			{...otherProps}
		>
			{children}
		</button>
	);
}
