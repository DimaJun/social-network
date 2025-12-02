import s from './FriendsPage.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function FriendsPage () {
  return (
    <div className={classNames(s.FriendsPage, {}, [])}>
      FriendsPage component
    </div>
  );
}
