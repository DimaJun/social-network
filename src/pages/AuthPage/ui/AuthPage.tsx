import s from './AuthPage.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";

function AuthPage () {
  return (
    <div className={classNames(s.AuthPage, {}, [])}>
      AuthPage component
    </div>
  );
}

export default AuthPage;
