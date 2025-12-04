import { useState } from 'react';

import { RegisterForm } from './RegisterForm/RegisterForm';
import s from './Authorization.module.scss';
import { LoginForm } from './LoginForm/LoginForm';

import { Button } from '@/shared/ui/Button';

export function Authorization() {
	const [isLogin, setIsLogin] = useState(false);

	const toggleIsLogin = () => {
		setIsLogin((prev) => !prev);
	};

	if (isLogin) {
		return (
			<>
				<LoginForm />
				<Button
					className={s.toggleForm}
					onClick={toggleIsLogin}
				>
					Нету аккаунта?
				</Button>
			</>
		);
	}

	return (
		<>
			<RegisterForm />
			<Button
				className={s.toggleForm}
				onClick={toggleIsLogin}
			>
				Уже зарегистрированны?
			</Button>
		</>
	);
}
