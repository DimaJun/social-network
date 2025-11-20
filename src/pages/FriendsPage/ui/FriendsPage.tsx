import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

function FriendsPage() {
	return <div className={classNames(s.FriendsPage, {}, [])}>FriendsPage component</div>;
}

export default FriendsPage;
