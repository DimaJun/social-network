import { ReactNode } from 'react';

import {
	routes,
	getRouteAuth,
	getRouteFriends,
	getRouteMain,
	getRouteMessages,
} from '@/shared/configs/router/router';
import { MainPage } from '@/pages/MainPage';
import { FriendsPage } from '@/pages/FriendsPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { AuthPage } from '@/pages/AuthPage';

export interface AppRoute {
	path: string;
	element: ReactNode;
}

export const routeConfig: Record<string, AppRoute> = {
	[routes.main.route]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[routes.friends.route]: {
		path: getRouteFriends(),
		element: <FriendsPage />,
	},
	[routes.messages.route]: {
		path: getRouteMessages(),
		element: <MessagesPage />,
	},
	[routes.auth.route]: {
		path: getRouteAuth(),
		element: <AuthPage />,
	},
};
