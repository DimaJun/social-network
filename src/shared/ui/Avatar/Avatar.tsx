import { ImgHTMLAttributes } from 'react';

import s from './Avatar.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import UserIcon from '@/shared/assets/icons/user-icon.svg';
import { Icon } from '@/shared/ui/Icon';

type AvatarPropsType = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'>;

interface AvatarProps extends AvatarPropsType {
	className?: string;
	src?: string;
	size?: number | string;
	rounded?: boolean;
}

export function Avatar(props: AvatarProps) {
	const { className, src, size = 50, rounded = false, alt, ...restProps } = props;

	if (!src) {
		return (
			<Icon
				Svg={UserIcon}
				width={size}
				height={size}
			/>
		);
	}

	return (
		<img
			className={classNames(s.Img, { [s.rounded]: rounded }, [className])}
			src={src}
			alt={alt}
			width={size}
			height={size}
			{...restProps}
		/>
	);
}
