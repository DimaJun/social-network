import {ReactNode} from "react";

import {getRouteAuth, getRouteFriends, getRouteMain, getRouteMessages, Routes} from "@/shared/router/config";
import {MainPage} from "@/pages/MainPage";
import {FriendsPage} from "@/pages/FriendsPage";
import {MessagesPage} from "@/pages/MessagesPage";
import {AuthPage} from "@/pages/AuthPage";

export interface RouteItem {
    path: string;
    element: ReactNode;
}

export const routeConfig: Record<Routes, RouteItem> = {
    [Routes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [Routes.FRIENDS]: {
        path: getRouteFriends(),
        element: <FriendsPage/>
    },
    [Routes.MESSAGES]: {
        path: getRouteMessages(),
        element: <MessagesPage/>
    },
    [Routes.AUTH]: {
        path: getRouteAuth(),
        element: <AuthPage/>
    },
}
