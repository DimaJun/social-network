import s from './MessengerPage.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

export function MessengerPage () {
  return (
    <div className={classNames(s.MessengerPage, {}, [])}>
      MessengerPage component
    </div>
  );
}
