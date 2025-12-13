import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '../Authorization.module.scss';
import { registerSchema, RegistrationFormData } from '../../model/schemas/registration';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';

export function RegisterForm() {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
	});

	const onSubmit = (data: RegistrationFormData) => {
		console.log(data);
		reset();
	};

	return (
		<form
			className={s.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<h1 className={s.header}>Регистрация</h1>
			<Controller
				name='username'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Никнейм'
						placeholder='Введите никнейм'
						value={field.value}
						onChange={(value) => field.onChange(value)}
					/>
				)}
			/>
			{errors.username && <p className={s.error}>{errors.username.message}</p>}
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Почта'
						placeholder='Введите почту'
						type='email'
						value={field.value}
						onChange={(value) => field.onChange(value)}
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
						onChange={(value) => field.onChange(value)}
					/>
				)}
			/>
			{errors.password && <p className={s.error}>{errors.password.message}</p>}
			<Controller
				name='confirmPassword'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label='Подтверждение пароля'
						placeholder='Подтвердите пароль'
						type='password'
						value={field.value}
						onChange={(value) => field.onChange(value)}
					/>
				)}
			/>
			{errors.confirmPassword && <p className={s.error}>{errors.confirmPassword.message}</p>}
			<Button
				className={s.submit}
				variant='background'
				type='submit'
			>
				Регистрация
			</Button>
		</form>
	);
}
