import s from './Navbar.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function Navbar () {
  return (
    <div className={classNames(s.Navbar, {}, [])}>
      Navbar component
    </div>
  );
}
