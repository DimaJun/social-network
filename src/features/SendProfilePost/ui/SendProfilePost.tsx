import { SendHorizonal } from 'lucide-react';

import s from './SendProfilePost.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function SendProfilePost() {
	return (
		<div className={classNames(s.SendProfilePost, {}, [])}>
			<Input placeholder='Введите текст комментария' />
			<Button>
				<SendHorizonal />
			</Button>
		</div>
	);
}
