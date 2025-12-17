import { Toaster } from 'react-hot-toast';

import s from './AppLayout.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';
import { useAppSelector } from '@/shared/hooks/store';
import { selectIsAuthenticated } from '@/features/Authorization';

export function AppLayout() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const mods: Mods = {
		loggined: isAuthenticated,
	};

	return (
		<div className={classNames('app', mods, [])}>
			<Toaster
				position='top-right'
				gutter={10}
			/>
			<Header />
			<Sidebar />
			<main className={classNames(s.content, { [s.loggined]: isAuthenticated }, [])}>
				<AppRouter />
			</main>
		</div>
	);
}
