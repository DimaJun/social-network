import s from '../Authorization.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function LoginForm() {
	return (
		<form className={s.form}>
			<h1 className={s.header}>Логин</h1>
			<Input
				className={s.input}
				label='Никнейм или почта'
				placeholder='Введите никнейм или почту'
			/>
			<Input
				className={s.input}
				label='Пароль'
				placeholder='Введите пароль'
				type='password'
			/>
			<Button
				className={s.submit}
				variant='background'
			>
				Логин
			</Button>
		</form>
	);
}
