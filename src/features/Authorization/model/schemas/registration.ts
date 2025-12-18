import * as z from 'zod';

import { getMessages } from './translations/registration';

export const createRegisterSchema = (locale: 'ru' | 'en' | 'uk' = 'en') => {
	const msg = getMessages(locale);

	return z
		.object({
			username: z
				.string()
				.min(3, msg.username.min)
				.max(24, msg.username.max)
				.regex(/^[a-zA-Z0-9_]+$/, msg.username.pattern),
			email: z.email({
				pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
				error: msg.email.invalid,
			}),
			password: z
				.string()
				.min(8, msg.password.min)
				.regex(/[A-Z]/, msg.password.uppercase)
				.regex(/[a-z]/, msg.password.lowercase)
				.regex(/[0-9]/, msg.password.digit),
			confirmPassword: z.string().min(1, msg.confirmPassword.required),
		})
		.refine((data) => data.password === data.confirmPassword, {
			error: msg.confirmPassword.mismatch,
			path: ['confirmPassword'],
		});
};

export type RegistrationFormData = z.infer<ReturnType<typeof createRegisterSchema>>;
