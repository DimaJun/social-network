import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import s from '../Authorization.module.scss';
import { registerSchema, RegistrationFormData } from '../../model/schemas/registration';
import { useRegisterMutation } from '../../api/auth';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { showToast } from '@/shared/lib/toaster/toast';
import { ApiError } from '@/shared/configs/api';

interface RegisterFormProps {
	toggleLogin: () => void;
}

export function RegisterForm({ toggleLogin }: RegisterFormProps) {
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(registerSchema),
		mode: 'onChange',
		defaultValues: {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
		},
	});

	const [register, { isLoading }] = useRegisterMutation();

	const onSubmit = async (data: RegistrationFormData) => {
		await register(data)
			.unwrap()
			.then((data) => {
				showToast.success('Успешная регистрация!');
				toggleLogin();
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
						onChange={field.onChange}
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
						onChange={field.onChange}
					/>
				)}
			/>
			{errors.confirmPassword && <p className={s.error}>{errors.confirmPassword.message}</p>}
			<Button
				className={s.submit}
				variant='background'
				disabled={isLoading}
				type='submit'
			>
				Регистрация
			</Button>
		</form>
	);
}
