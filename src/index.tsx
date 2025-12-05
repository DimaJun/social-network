import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';

import { App } from '@/app/App';
import '@/app/styles/main.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

const container = document.getElementById('root');

if (!container) {
	throw new Error('No root container to render!');
}

createRoot(container).render(
	<ThemeProvider>
		<Router>
			<App />
		</Router>
	</ThemeProvider>
);

// SettingsPage
