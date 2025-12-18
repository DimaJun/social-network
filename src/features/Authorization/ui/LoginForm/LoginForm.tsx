import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

import s from '../Authorization.module.scss';
import { LoginFormData, createLoginSchema } from '../../model/schemas/login';
import { authSliceActions } from '../../model/slice/authSlice';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useLoginMutation } from '@/features/Authorization/api/auth';
import { showToast } from '@/shared/lib/toaster/toast';
import { ApiError } from '@/shared/configs/api';
import { useAppDispatch } from '@/shared/hooks/store';
import { Locale } from '@/shared/types/locales';

const { setCredentials } = authSliceActions;

export function LoginForm() {
	const { t, i18n } = useTranslation('auth');
	const locale = i18n.language as Locale;
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: zodResolver(createLoginSchema(locale)),
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: '',
		},
	});
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [login, { isLoading }] = useLoginMutation();

	const onSubmit = async (data: LoginFormData) => {
		await login(data)
			.unwrap()
			.then((response) => {
				showToast.success(t('success-login'));
				reset();
				dispatch(setCredentials(response));
				void navigate('/');
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
			<h1 className={s.header}>{t('login')}</h1>
			<Controller
				name='email'
				control={control}
				render={({ field }) => (
					<Input
						className={s.input}
						label={t('email')}
						placeholder={t('enter-email')}
						value={field.value}
						onChange={field.onChange}
						type='email'
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
			<Button
				className={s.submit}
				disabled={isLoading}
				type='submit'
				variant='background'
			>
				{t('login')}
			</Button>
		</form>
	);
}
