import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';

import s from './ProfilePage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ProfileHeader, ProfileInfo, ProfilePosts } from '@/entities/Profile';
import { getMyProfileRoute } from '@/shared/configs/router/router';
import {
	useLazyGetMyProfileQuery,
	useLazyGetProfileByIdQuery,
} from '@/entities/Profile/api/profile';

function ProfilePage() {
	const location = useLocation();
	const { id } = useParams<{ id: string }>();
	const isMyProfile = location.pathname === getMyProfileRoute();

	const [getMyProfile, { data: myProfile }] = useLazyGetMyProfileQuery();
	const [getProfileById, { data: otherProfile }] = useLazyGetProfileByIdQuery();

	useEffect(() => {
		if (isMyProfile) {
			getMyProfile();
		} else if (id) {
			getProfileById({ id });
		}
	}, [getMyProfile, getProfileById, id, isMyProfile]);

	return (
		<Page className={classNames(s.ProfilePage, {}, [])}>
			<ProfileHeader profile={isMyProfile ? myProfile : otherProfile} />
			<ProfileInfo />
			<ProfilePosts />
		</Page>
	);
}

export default ProfilePage;
