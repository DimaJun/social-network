import { Camera, House, Mail, Users } from 'lucide-react';

export const routes = {
	main: {
		route: '/',
		Icon: House,
		text: 'Главная',
	},
	messages: {
		route: '/messages',
		Icon: Mail,
		text: 'Сообщения',
	},
	friends: {
		route: '/friends',
		Icon: Users,
		text: 'Друзья',
	},
	auth: {
		route: '/auth',
		Icon: Camera,
		text: 'Авторизация',
	},
} as const;

export const getRouteMain = () => routes.main.route;
export const getRouteMessages = () => routes.messages.route;
export const getRouteFriends = () => routes.friends.route;
export const getRouteAuth = () => routes.auth.route;
