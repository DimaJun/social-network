import s from './ProfilePost.module.scss';

import { Card } from '@/shared/ui/Card';
import { Avatar } from '@/shared/ui/Avatar';

export function ProfilePost() {
	return (
		<Card
			className={s.post}
			padding='8'
		>
			<div className={s.data}>
				<Avatar size={30} />
				<div className={s.info}>
					<p className={s.username}>Dima Rui</p>
					<p className={s.timestamp}>28.01.2004 в 16:44</p>
				</div>
			</div>
			<p className={s.text}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet
				blanditiis dicta eligendi, eum maiores molestias non omnis pariatur quisquam.
			</p>
		</Card>
	);
}
