export enum Routes {
	MAIN = 'main',
	FRIENDS = 'friends',
	MESSENGER = 'messenger',
	SETTINGS = 'settings',
	PROFILE = 'profile',
	MY_PROFILE = 'my_profile',
	AUTH = 'auth',
}

export const getMainRoute = () => '/';
export const getFriendsRoute = () => '/friends';
export const getMessengerRoute = () => '/messenger';
export const getSettingsRoute = () => '/settings';
export const getAuthRoute = () => '/auth';
export const getProfileRoute = () => `/profile/:id`;
export const getMyProfileRoute = () => '/profile/my';
