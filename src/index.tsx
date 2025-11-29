import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router';

import { App } from '@/app/App';

import '@/app/styles/main.scss';

const container = document.getElementById('root');

if (!container) {
	throw new Error('No root container to render!');
}

createRoot(container).render(
	<Router>
		<App />
	</Router>
);

// Messages:
// entities: Message (MessageBlock)
// features: SendMessage +(Input&Button) (think about trying to make a textarea instead of input), FilterChats (Filter by: Group/Direct chats)
// widgets: Messenger (contains all the blocks needed for the page, built by a grid system)
