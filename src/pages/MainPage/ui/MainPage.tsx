import s from './MainPage.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function MainPage () {
  return (
    <div className={classNames(s.MainPage, {}, [])}>
      MainPage component
    </div>
  );
}
