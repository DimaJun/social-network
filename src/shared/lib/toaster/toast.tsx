import toast from 'react-hot-toast';

import {
	ToastError,
	ToastFriendRequest,
	ToastMessenger,
	ToastNotification,
	ToastSuccess,
} from '@/shared/ui/Toast';

export const showToast = {
	success: (message: string) => {
		toast.custom(
			(t) => (
				<ToastSuccess
					message={message}
					t={t}
				/>
			),
			{
				duration: 2000,
			}
		);
	},
	error: (message: string) => {
		toast.custom(
			(t) => (
				<ToastError
					message={message}
					t={t}
				/>
			),
			{
				duration: 2000,
			}
		);
	},
	notification: (message: string) => {
		toast.custom(
			(t) => (
				<ToastNotification
					message={message}
					t={t}
				/>
			),
			{
				duration: 2000,
			}
		);
	},
	friendRequest: (message: string) => {
		toast.custom(
			(t) => (
				<ToastFriendRequest
					message={message}
					t={t}
				/>
			),
			{
				duration: 2000,
			}
		);
	},
	messenger: (message: string) => {
		toast.custom(
			(t) => (
				<ToastMessenger
					message={message}
					t={t}
				/>
			),
			{
				duration: 2000,
			}
		);
	},
};
