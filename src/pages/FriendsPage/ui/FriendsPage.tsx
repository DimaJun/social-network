import s from './FriendsPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Page } from '@/widgets/Page';

function FriendsPage() {
	return <Page className={classNames(s.FriendsPage, {}, [])}></Page>;
}

export default FriendsPage;

// TODO: Подготовить разметку для страницы друзей
// TODO: Сделать компоненты FriendsSearch, FriendsList, FriendItem
