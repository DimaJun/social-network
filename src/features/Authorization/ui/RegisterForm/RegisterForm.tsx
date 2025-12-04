import s from '../Authorization.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function RegisterForm() {
	return (
		<form className={s.form}>
			<h1 className={s.header}>Регистрация</h1>
			<Input
				className={s.input}
				label='Никнейм'
				placeholder='Введите никнейм'
			/>
			<Input
				className={s.input}
				label='Почта'
				placeholder='Введите почту'
			/>
			<Input
				className={s.input}
				label='Пароль'
				placeholder='Введите пароль'
				type='password'
			/>
			<Input
				className={s.input}
				label='Подтверждение пароля'
				placeholder='Подтвердите пароль'
				type='password'
			/>
			<Button
				className={s.submit}
				variant='background'
			>
				Регистрация
			</Button>
		</form>
	);
}
