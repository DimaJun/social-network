import { SendHorizontal } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import s from './SendMessage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function SendMessage() {
	const { t } = useTranslation('messenger');

	return (
		<div className={classNames(s.SendMessage, {}, [])}>
			<Input
				className={s.input}
				placeholder={t('enter-a-message')}
			/>
			<Button className={s.sendButton}>
				<SendHorizontal />
			</Button>
		</div>
	);
}
