import s from './MessageBlock.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';

interface MessageBlockProps {
	className?: string;
	isOwn?: boolean;
	message?: string;
}

export function MessageBlock(props: MessageBlockProps) {
	const { className, message, isOwn } = props;

	const mods: Mods = {
		[s.isOwn]: isOwn,
	};

	if (!isOwn) {
		return (
			<div className={classNames(s.Message, mods, [className])}>
				<Avatar
					className={s.avatar}
					size={30}
					rounded
				/>
				<p className={s.messageBubble}>{message}</p>
			</div>
		);
	}

	return (
		<div className={classNames(s.Message, mods, [className])}>
			<p className={s.messageBubble}>{message}</p>
			<Avatar
				className={s.avatar}
				size={30}
				rounded
			/>
		</div>
	);
}
