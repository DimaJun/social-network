import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';

import s from '../Authorization.module.scss';
import { createRegisterSchema, RegistrationFormData } from '../../model/schemas/registration';
import { useRegisterMutation } from '../../api/auth';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { showToast } from '@/shared/lib/toaster/toast';
import { ApiError } from '@/shared/configs/api';
import { Locale } from '@/shared/types/locales';

interface RegisterFormProps {
	toggleLogin: () => void;
}

export function RegisterForm({ toggleLogin }: RegisterFormProps) {
	const { t, i18n } = useTranslation('auth');
	const locale = i18n.language as Locale;
	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<RegistrationFormData>({
		resolver: zodResolver(createRegisterSchema(locale)),
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
			.then(() => {
				showToast.success(t('success-registration'));
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
			<h1 className={s.header}>{t('registration')}</h1>
			<Controller
				name='username'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label={t('nickname')}
						placeholder={t('enter-nickname')}
						value={field.value}
						onChange={field.onChange}
						autoComplete='username'
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
						label={t('email')}
						placeholder={t('enter-email')}
						type='email'
						value={field.value}
						onChange={field.onChange}
						autoComplete='email'
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
						label={t('password')}
						placeholder={t('enter-password')}
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
						label={t('password-confirm')}
						placeholder={t('password-confirm-place')}
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
				{t('registration')}
			</Button>
		</form>
	);
}
