import s from './AppLayout.module.scss';

import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from '@/app/providers/router';

export function AppLayout() {
	return (
		<div className='app'>
			<Navbar />
			<Sidebar />
			<main className={s.content}>
				<AppRouter />
			</main>
		</div>
	);
}
