import { FC, SVGProps } from 'react';

import s from './Icon.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface IconProps extends SVGProps<SVGSVGElement> {
	className?: string;
	Svg: FC<SVGProps<SVGSVGElement>>;
}

export function Icon(props: IconProps) {
	const { className, Svg, ...otherProps } = props;
	return (
		<Svg
			className={classNames(s.Icon, {}, [className])}
			{...otherProps}
		/>
	);
}
