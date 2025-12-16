import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '../Authorization.module.scss';
import { LoginFormData, loginSchema } from '../../model/schemas/login';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useLoginMutation } from '@/features/Authorization/api/auth';
import { showToast } from '@/shared/lib/toaster/toast';
import { ApiError } from '@/shared/configs/api';

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
			email: '',
			password: '',
		},
	});

	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data: LoginFormData) => {
		await login(data)
			.unwrap()
			.then((data) => {
				showToast.success('Успешная авторизация!');
				reset();
			})
			.catch((e: ApiError) => {
				showToast.error(e.data.message);
			});
	};

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className={s.header}>Логин</h1>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Почта'
						placeholder='Введите почту'
						value={field.value}
						onChange={field.onChange}
					/>
				)}
			/>
			{errors.email && <p className={s.error}>{errors.email.message}</p>}
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
