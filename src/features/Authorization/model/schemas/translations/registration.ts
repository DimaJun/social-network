export const validationMessages = {
	ru: {
		username: {
			min: 'Минимум 3 символа',
			max: 'Максимум 24 символа',
			pattern: 'Только буквы, цифры и _',
		},
		email: {
			invalid: 'Невалидная почта',
		},
		password: {
			min: 'Минимум 8 символов',
			uppercase: 'Нужна заглавная буква',
			lowercase: 'Нужны строчные буквы',
			digit: 'Нужны цифры',
		},
		confirmPassword: {
			required: 'Подтверждение пароля обязательно',
			mismatch: 'Пароли не совпадают',
		},
	},
	en: {
		username: {
			min: 'Minimum 3 characters',
			max: 'Maximum 24 characters',
			pattern: 'Only letters, numbers and _',
		},
		email: {
			invalid: 'Invalid email',
		},
		password: {
			min: 'Minimum 8 characters',
			uppercase: 'Must contain uppercase letter',
			lowercase: 'Must contain lowercase letters',
			digit: 'Must contain digits',
		},
		confirmPassword: {
			required: 'Password confirmation is required',
			mismatch: 'Passwords do not match',
		},
	},
	uk: {
		username: {
			min: 'Мінімум 3 символи',
			max: 'Максимум 24 символи',
			pattern: 'Тільки літери, цифри та _',
		},
		email: {
			invalid: 'Невалідна пошта',
		},
		password: {
			min: 'Мінімум 8 символів',
			uppercase: 'Потрібна велика літера',
			lowercase: 'Потрібні малі літери',
			digit: 'Потрібні цифри',
		},
		confirmPassword: {
			required: "Підтвердження пароля обов'язкове",
			mismatch: 'Паролі не збігаються',
		},
	},
} as const;

export const getMessages = (locale: 'ru' | 'en' | 'uk' = 'en') => validationMessages[locale];
