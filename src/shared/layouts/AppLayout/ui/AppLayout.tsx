import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import s from './AppLayout.module.scss';

import { classNames, Mods } from '@/shared/helpers/classNames/classNames';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/store';
import {
	authSliceActions,
	selectIsAuthenticated,
	useLazyRefreshQuery,
} from '@/features/Authorization';

const { logout, setCredentials } = authSliceActions;

export function AppLayout() {
	const isAuthenticated = useAppSelector(selectIsAuthenticated);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const [refresh] = useLazyRefreshQuery();

	const mods: Mods = {
		loggined: isAuthenticated,
	};

	useEffect(() => {
		refresh()
			.unwrap()
			.then((data) => {
				dispatch(setCredentials(data));
				void navigate('/');
			})
			.catch(() => {
				dispatch(logout());
			});
	}, []);

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
