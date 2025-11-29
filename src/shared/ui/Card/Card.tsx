import { ReactNode } from 'react';

import s from './Card.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

type CardPadding = 4 | 8 | 16 | 24 | 32;

const mapPaddingToClass: Record<CardPadding, string> = {
	'4': s.padding4,
	'8': s.padding8,
	'16': s.padding16,
	'24': s.padding24,
	'32': s.padding32,
};

interface CardProps {
	className?: string;
	children?: ReactNode;
	padding?: CardPadding;
}

export function Card(props: CardProps) {
	const { className, children, padding } = props;

	const paddingClass = mapPaddingToClass[padding];

	return <div className={classNames(s.Card, {}, [className, paddingClass])}>{children}</div>;
}
