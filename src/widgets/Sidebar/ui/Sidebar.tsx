import s from './Sidebar.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function Sidebar () {
  return (
    <div className={classNames(s.Sidebar, {}, [])}>
      Sidebar component
    </div>
  );
}
