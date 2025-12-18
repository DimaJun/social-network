import * as z from 'zod';

import { getMessages } from './translations/login';

export const createLoginSchema = (locale: 'ru' | 'en' | 'uk' = 'en') => {
	const msg = getMessages(locale);

	return z.object({
		email: z
			.string()
			.min(1, msg.email.required)
			.refine(
				(value) => {
					return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
				},
				{ error: msg.email.required }
			),
		password: z.string().min(1, msg.password.required),
	});
};

export type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;
