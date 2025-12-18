import { SendHorizonal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import s from './SendProfilePost.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function SendProfilePost() {
	const { t } = useTranslation('profile');

	return (
		<div className={classNames(s.SendProfilePost, {}, [])}>
			<Input placeholder={t('enter-a-comment')} />
			<Button>
				<SendHorizonal />
			</Button>
		</div>
	);
}
