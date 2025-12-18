export const validationMessages = {
	ru: {
		email: {
			required: 'Поле обязательно',
		},
		password: {
			required: 'Поле обязательно',
		},
	},
	en: {
		email: {
			required: 'Field is required',
		},
		password: {
			required: 'Field is required',
		},
	},
	uk: {
		email: {
			required: "Поле обов'язковe",
		},
		password: {
			required: "Поле обов'язковe",
		},
	},
} as const;

export const getMessages = (locale: 'ru' | 'en' | 'uk' = 'en') => validationMessages[locale];
