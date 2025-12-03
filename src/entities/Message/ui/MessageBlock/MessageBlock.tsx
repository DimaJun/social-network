import s from './MessageBlock.module.scss';

import { Avatar } from '@/shared/ui/Avatar';
import { classNames, Mods } from '@/shared/helpers/classNames/classNames';

interface MessageBlockProps {
	isOwn?: boolean;
	message?: string;
}

export function MessageBlock(props: MessageBlockProps) {
	const { message, isOwn } = props;

	const mods: Mods = {
		[s.isOwn]: isOwn,
	};

	if (isOwn) {
		return (
			<div className={classNames(s.wrapper, mods, [])}>
				<p className={s.message}>{message}</p>
				<Avatar size={35} />
			</div>
		);
	}

	return (
		<div className={classNames(s.wrapper, mods, [])}>
			<Avatar size={35} />
			<p className={s.message}>{message}</p>
		</div>
	);
}
