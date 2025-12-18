import { useTranslation } from 'react-i18next';

import s from './FriendsSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';

export function FriendsSearch() {
	const { t } = useTranslation('friends');
	return (
		<Input
			className={classNames(s.FriendsSearch, {}, [])}
			labelClass={s.label}
			label={t('find-friends')}
			placeholder={t('enter-friend-name')}
		/>
	);
}
