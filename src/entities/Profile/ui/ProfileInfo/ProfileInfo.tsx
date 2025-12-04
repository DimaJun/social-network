import { EyeIcon, MessageCircle, ThumbsDown, ThumbsUp } from 'lucide-react';

import s from './ProfileInfo.module.scss';

import { Button } from '@/shared/ui/Button';

export function ProfileInfo() {
	return (
		<div className={s.actions}>
			<Button>
				<ThumbsUp size={24} />
				Лайк
			</Button>
			<Button>
				<ThumbsDown size={24} />
				Дизлайк
			</Button>
			<Button>
				<EyeIcon size={24} />
				Просмотров
			</Button>
			<Button>
				<MessageCircle size={24} />
				Комментариев
			</Button>
		</div>
	);
}
