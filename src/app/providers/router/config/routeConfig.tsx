import { ReactNode } from 'react';

import {
	AppRoutes,
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
	[AppRoutes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
	},
	[AppRoutes.FRIENDS]: {
		path: getRouteFriends(),
		element: <FriendsPage />,
	},
	[AppRoutes.MESSAGES]: {
		path: getRouteMessages(),
		element: <MessagesPage />,
	},
	[AppRoutes.AUTH]: {
		path: getRouteFriends(),
		element: <AuthPage />,
	},
};
