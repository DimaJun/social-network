import * as z from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.min(1, 'Поле обязательно')
		.refine(
			(value) => {
				return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
			},
			{ error: 'Поле обязательно' }
		),
	password: z.string().min(1, 'Поле обязательно'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
