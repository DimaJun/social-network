import { FC, ReactNode, SVGProps } from 'react';

import {
	getRouteAuth,
	getRouteFriends,
	getRouteMain,
	getRouteMessages,
	Routes,
} from '@/shared/router/config';
import { MainPage } from '@/pages/MainPage';
import { FriendsPage } from '@/pages/FriendsPage';
import { MessagesPage } from '@/pages/MessagesPage';
import { AuthPage } from '@/pages/AuthPage';
import MainIcon from '@/shared/assets/icons/home.svg';
import FriendsIcon from '@/shared/assets/icons/friends.svg';
import MessagesIcon from '@/shared/assets/icons/messages.svg';

export interface RouteItem {
	path: string;
	element: ReactNode;
	text?: string;
	icon?: FC<SVGProps<SVGSVGElement>>;
}

export const routeConfig: Record<Routes, RouteItem> = {
	[Routes.MAIN]: {
		path: getRouteMain(),
		element: <MainPage />,
		text: 'Главная',
		icon: MainIcon,
	},
	[Routes.FRIENDS]: {
		path: getRouteFriends(),
		element: <FriendsPage />,
		text: 'Друзья',
		icon: FriendsIcon,
	},
	[Routes.MESSAGES]: {
		path: getRouteMessages(),
		element: <MessagesPage />,
		text: 'Сообщения',
		icon: MessagesIcon,
	},
	[Routes.AUTH]: {
		path: getRouteAuth(),
		element: <AuthPage />,
		text: 'Авторизация',
	},
};
