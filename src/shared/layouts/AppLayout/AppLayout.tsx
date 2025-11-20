import {ReactNode} from "react";

import s from './AppLayout.module.scss';

import {classNames} from "@/shared/helpers/classNames/classNames";
import {AppRouter} from "@/app/router";

interface AppLayoutProps {
    className?: string;
    navbar: ReactNode;
    sidebar?: ReactNode;
}

export function AppLayout(props: AppLayoutProps) {
    const {className, sidebar, navbar} = props;

    return (
        <div className={classNames(s.AppLayout, {}, [className])}>
            <div className={classNames(s.Navbar)}>{navbar}</div>
            {sidebar && <div className={classNames(s.Sidebar)}>{sidebar}</div>}
            <div className={classNames(s.content)}>
                <AppRouter/>
            </div>
        </div>
    )
}
