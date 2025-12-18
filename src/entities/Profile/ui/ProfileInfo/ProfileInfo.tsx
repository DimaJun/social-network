import { EyeIcon, MessageCircle, ThumbsDown, ThumbsUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import s from './ProfileInfo.module.scss';

import { Button } from '@/shared/ui/Button';

export function ProfileInfo() {
	const { t } = useTranslation('profile');

	return (
		<div className={s.actions}>
			<Button>
				<ThumbsUp size={24} />
				{t('likes')}
			</Button>
			<Button>
				<ThumbsDown size={24} />
				{t('dislike')}
			</Button>
			<Button>
				<EyeIcon size={24} />
				{t('views')}
			</Button>
			<Button>
				<MessageCircle size={24} />
				{t('comments')}
			</Button>
		</div>
	);
}
