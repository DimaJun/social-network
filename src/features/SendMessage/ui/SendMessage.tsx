import { SendHorizontalIcon } from 'lucide-react';

import s from './SendMessage.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function SendMessage() {
	return (
		<div className={s.send}>
			<Input
				className={s.input}
				placeholder={'Введите сообщение..'}
			/>
			<Button className={s.sendButton}>
				<SendHorizontalIcon />
			</Button>
		</div>
	);
}
