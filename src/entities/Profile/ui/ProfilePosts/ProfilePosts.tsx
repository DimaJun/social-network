import s from './ProfilePosts.module.scss';

import { SendProfilePost } from '@/features/SendProfilePost';
import { ProfilePost } from '@/entities/Profile/ui/ProfilePost/ProfilePost';

export function ProfilePosts() {
	return (
		<div className={s.feed}>
			<SendProfilePost />
			<div className={s.posts}>
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
				<ProfilePost />
			</div>
		</div>
	);
}
