import { SendHorizontal } from 'lucide-react';

import s from './SendMessage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function SendMessage() {
	return (
		<div className={classNames(s.SendMessage, {}, [])}>
			<Input
				className={s.input}
				placeholder='Введите сообщение..'
			/>
			<Button className={s.sendButton}>
				<SendHorizontal />
			</Button>
		</div>
	);
}
