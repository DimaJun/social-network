import { useState } from 'react';

import s from './AuthForm.module.scss';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function AuthForm() {
	const [isLogin, setIsLogin] = useState(false);

	return (
		<>
			<form className={s.authForm}>
				<h1 className={s.header}>{isLogin ? 'Логин' : 'Регистрация'}</h1>
				<Input
					className={s.input}
					placeholder={isLogin ? 'Введите логин или почту' : 'Введите почту'}
					type='email'
					label={isLogin ? 'Почта или логин' : 'Почта'}
				/>
				{!isLogin && (
					<Input
						className={s.input}
						placeholder='Введите логин'
						type='text'
						label='Логин'
					/>
				)}
				<Input
					className={s.input}
					placeholder='Введите пароль'
					type='password'
					label='Пароль'
				/>
				{!isLogin && (
					<Input
						className={s.input}
						placeholder='Введите пароль'
						type='password'
						label='Подтвердите пароль'
					/>
				)}
				<Button className={s.authBtn}>{isLogin ? 'Логин' : 'Регистрация'}</Button>
			</form>
			<Button
				className={s.changeForm}
				onClick={() => setIsLogin((prev) => !prev)}
			>
				{isLogin ? 'Не зарегистрированны?' : 'Уже есть аккаунт?'}
			</Button>
		</>
	);
}
