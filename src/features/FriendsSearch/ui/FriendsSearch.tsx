import { useTranslation } from 'react-i18next';
import { Dispatch, SetStateAction } from 'react';

import s from './FriendsSearch.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Input } from '@/shared/ui/Input';

interface FriendsSearchProps {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

export function FriendsSearch(props: FriendsSearchProps) {
	const { t } = useTranslation('friends');
	const { query, setQuery } = props;

	return (
		<Input
			className={classNames(s.FriendsSearch, {}, [])}
			labelClass={s.label}
			label={t('find-friends')}
			placeholder={t('enter-friend-name')}
			value={query}
			onChange={setQuery}
		/>
	);
}
