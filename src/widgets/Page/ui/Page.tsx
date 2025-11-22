import { PropsWithChildren } from 'react';

import s from './Page.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface PageProps extends PropsWithChildren {
	className?: string;
}

export function Page({ children, className }: PageProps) {
	return <div className={classNames(s.Page, {}, [className])}>{children}</div>;
}
