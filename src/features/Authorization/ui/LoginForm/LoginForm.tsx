import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '../Authorization.module.scss';
import { LoginFormData, loginSchema } from '../../model/schemas/login';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useLoginMutation } from '@/features/Authorization/api/auth';
import { showToast } from '@/shared/lib/toaster/toast';

export function LoginForm() {
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(loginSchema),
		mode: 'onChange',
		defaultValues: {
			emailOrUsername: '',
			password: '',
		},
	});

	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data: LoginFormData) => {
		try {
			const res = await login(data).unwrap();
			showToast.success('Успешная авторизация!');
			reset();
			console.log(res);
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className={s.header}>Логин</h1>
			<Controller
				name='emailOrUsername'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Никнейм или почта'
						placeholder='Введите никнейм или почту'
						value={field.value}
						onChange={field.onChange}
					/>
				)}
			/>
			{errors.emailOrUsername && <p className={s.error}>{errors.emailOrUsername.message}</p>}
			<Controller
				name='password'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Пароль'
						placeholder='Введите пароль'
						type='password'
						value={field.value}
						onChange={field.onChange}
					/>
				)}
			/>
			{errors.password && <p className={s.error}>{errors.password.message}</p>}
			<Button
				className={s.submit}
				disabled={isLoading}
				type='submit'
				variant='background'
			>
				Логин
			</Button>
		</form>
	);
}
