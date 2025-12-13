import * as z from 'zod';

export const registerSchema = z
	.object({
		username: z
			.string()
			.min(3, 'Минимум 3 символа')
			.max(24, 'Максимум 24 символа')
			.regex(/^[a-zA-Z0-9_]+$/, 'Только буквы, цифры и _'),
		email: z.email({
			pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			error: 'Невалидная почта',
		}),
		password: z
			.string()
			.min(8, 'Минимум 8 символов')
			.regex(/[A-Z]/, 'Нужна заглавная буква')
			.regex(/[a-z]/, 'Нужны строчные буквы')
			.regex(/[0-9]/, 'Нужны цифры'),
		confirmPassword: z.string().min(1, 'Подтверждение пароля обязательно'),
	})
	.refine((data) => data.password === data.confirmPassword, {
		error: 'Пароли не совпадают',
		path: ['confirmPassword'],
	});

export type RegistrationFormData = z.infer<typeof registerSchema>;
