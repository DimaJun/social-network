import s from './ProfilePage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';
import { ProfileHeader, ProfileInfo, ProfilePosts } from '@/entities/Profile';

export function ProfilePage() {
	return (
		<Page className={classNames(s.ProfilePage, {}, [])}>
			<ProfileHeader />
			<ProfileInfo />
			<ProfilePosts />
		</Page>
	);
}
