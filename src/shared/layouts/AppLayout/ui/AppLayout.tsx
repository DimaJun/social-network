import s from './AppLayout.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';

export function AppLayout() {
	return (
		<div className={classNames('app', {}, [])}>
			<Header />
			<Sidebar />
			<main className={s.content}>
				<AppRouter />
			</main>
		</div>
	);
}
