import s from './AuthPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { AuthForm } from '@/features/Authorization';

export function AuthPage() {
	return (
		<Page className={classNames(s.AuthPage, {}, [])}>
			<AuthForm />
		</Page>
	);
}
