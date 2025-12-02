import { ReactNode } from 'react';

import s from './Page.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface PageProps {
	className?: string;
	children?: ReactNode;
}

export function Page(props: PageProps) {
	const { className, children } = props;

	return <div className={classNames(s.Page, {}, [className])}>{children}</div>;
}
