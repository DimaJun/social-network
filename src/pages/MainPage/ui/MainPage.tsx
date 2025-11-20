import s from './MainPage.module.scss';

import { classNames } from '@/shared/helpers/classNames/classNames';

function MainPage() {
	return <div className={classNames(s.MainPage, {}, [])}>MainPage component</div>;
}

export default MainPage;
