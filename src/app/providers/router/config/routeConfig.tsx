import { ReactNode } from 'react';

import {
	getAuthRoute,
	getFriendsRoute,
	getMainRoute,
	getMessengerRoute,
	getProfileRoute,
	Routes,
} from '@/shared/configs/router/router';
import { MainPage } from '@/pages/MainPage';
import { FriendsPage } from '@/pages/FriendsPage';
import { MessengerPage } from '@/pages/MessengerPage';
import { AuthPage } from '@/pages/AuthPage';
import { ProfilePage } from '@/pages/ProfilePage';

interface RouteItem {
	path: string;
	element: ReactNode;
}

type RouteConfig = Record<Routes, RouteItem>;

export const routeConfig: RouteConfig = {
	[Routes.MAIN]: {
		path: getMainRoute(),
		element: <MainPage />,
	},
	[Routes.FRIENDS]: {
		path: getFriendsRoute(),
		element: <FriendsPage />,
	},
	[Routes.MESSENGER]: {
		path: getMessengerRoute(),
		element: <MessengerPage />,
	},
	[Routes.PROFILE]: {
		path: getProfileRoute(),
		element: <ProfilePage />,
	},
	[Routes.AUTH]: {
		path: getAuthRoute(),
		element: <AuthPage />,
	},
};
