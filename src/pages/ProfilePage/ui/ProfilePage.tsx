import { useLocation } from 'react-router';
import { useEffect } from 'react';

import s from './ProfilePage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ProfileHeader, ProfileInfo, ProfilePosts } from '@/entities/Profile';
import { getMyProfileRoute } from '@/shared/configs/router/router';
import { useGetMyProfileQuery } from '@/entities/Profile/api/profile';

function ProfilePage() {
	const location = useLocation();
	const isMyProfile = location.pathname === getMyProfileRoute();

	const { data } = useGetMyProfileQuery();

	useEffect(() => {
		console.log(data);
	}, [data]);

	return (
		<Page className={classNames(s.ProfilePage, {}, [])}>
			<ProfileHeader profile={data} />
			<ProfileInfo />
			<ProfilePosts />
		</Page>
	);
}

export default ProfilePage;
