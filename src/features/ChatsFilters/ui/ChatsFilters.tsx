import { useTranslation } from 'react-i18next';

import s from './ChatsFilters.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';
import { Button } from '@/shared/ui/Button';

export function ChatsFilters() {
	const { t } = useTranslation('messenger');
	return (
		<div className={classNames(s.ChatsFilters, {}, [])}>
			<Button
				className={s.action}
				variant='background'
			>
				{t('direct')}
			</Button>
			<Button
				className={s.action}
				variant='background'
			>
				{t('groups')}
			</Button>
		</div>
	);
}
