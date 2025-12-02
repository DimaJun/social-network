import s from './Header.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function Header () {
  return (
    <div className={classNames(s.Header, {}, [])}>
      Header component
    </div>
  );
}
