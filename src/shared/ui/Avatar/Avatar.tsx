import { CSSProperties, ImgHTMLAttributes } from 'react';
import { CircleUserRound } from 'lucide-react';

import s from './Avatar.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	rounded?: boolean;
	size?: number;
}

export function Avatar(props: AvatarProps) {
	const { className, rounded, src, alt, size, ...otherProps } = props;

	const mods: Mods = {
		[s.rounded]: rounded,
	};

	const styles: CSSProperties = {
		width: size,
		height: size,
	};

	if (!src) {
		return <CircleUserRound size={size} />;
	}

	return (
		<img
			className={classNames(s.img, mods, [className])}
			src={src}
			alt={alt}
			style={styles}
			{...otherProps}
		/>
	);
}
