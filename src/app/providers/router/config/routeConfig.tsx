import { ReactNode } from 'react';

import {
	getAuthRoute,
	getFriendsRoute,
	getMainRoute,
	getMessengerRoute,
	getMyProfileRoute,
	getProfileRoute,
	getSettingsRoute,
	Routes,
} from '@/shared/configs/router/router';
import { MainPage } from '@/pages/MainPage';
import { FriendsPage } from '@/pages/FriendsPage';
import { MessengerPage } from '@/pages/MessengerPage';
import { AuthPage } from '@/pages/AuthPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { SettingsPage } from '@/pages/SettingsPage';

interface RouteItem {
	path: string;
	element: ReactNode;
	authNeeded: boolean;
}

type RouteConfig = Record<Routes, RouteItem>;

export const routeConfig: RouteConfig = {
	[Routes.MAIN]: {
		path: getMainRoute(),
		element: <MainPage />,
		authNeeded: true,
	},
	[Routes.FRIENDS]: {
		path: getFriendsRoute(),
		element: <FriendsPage />,
		authNeeded: true,
	},
	[Routes.MESSENGER]: {
		path: getMessengerRoute(),
		element: <MessengerPage />,
		authNeeded: true,
	},
	[Routes.PROFILE]: {
		path: getProfileRoute(),
		element: <ProfilePage />,
		authNeeded: true,
	},
	[Routes.MY_PROFILE]: {
		path: getMyProfileRoute(),
		element: <ProfilePage />,
		authNeeded: true,
	},
	[Routes.AUTH]: {
		path: getAuthRoute(),
		element: <AuthPage />,
		authNeeded: false,
	},
	[Routes.SETTINGS]: {
		path: getSettingsRoute(),
		element: <SettingsPage />,
		authNeeded: true,
	},
};
