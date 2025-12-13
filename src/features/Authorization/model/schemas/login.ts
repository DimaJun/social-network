import * as z from 'zod';

export const loginSchema = z.object({
	emailOrUsername: z
		.string()
		.min(1, 'Поле обязательно')
		.refine(
			(value) => {
				const isEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
				const isUsername = /^[a-zA-Z0-9_]{3,20}$/.test(value);
				return isEmail || isUsername;
			},
			{ error: 'Поле обязательно' }
		),
	password: z.string().min(1, 'Поле обязательно'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
