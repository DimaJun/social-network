import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';
import { Provider } from 'react-redux';

import { App } from '@/app/App';
import '@/app/styles/main.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { store } from '@/app/store';

import '@/shared/configs/i18n/i18n';

const container = document.getElementById('root');

if (!container) {
	throw new Error('No root container to render!');
}

createRoot(container).render(
	<Provider store={store}>
		<ThemeProvider>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Provider>
);

// SettingsPage
