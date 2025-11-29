import { ImgHTMLAttributes } from 'react';
import { CircleUserRoundIcon } from 'lucide-react';

import s from './Avatar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	size?: string | number;
	rounded?: boolean;
}

export function Avatar(props: AvatarProps) {
	const { className, src, rounded, size, alt, ...otherProps } = props;

	if (!src) {
		return (
			<CircleUserRoundIcon
				className={className}
				size={size}
			/>
		);
	}

	return (
		<img
			className={classNames(s.Avatar, { [s.rounded]: rounded }, [className])}
			src={src}
			width={size}
			height={size}
			alt={alt}
			{...otherProps}
		/>
	);
}
