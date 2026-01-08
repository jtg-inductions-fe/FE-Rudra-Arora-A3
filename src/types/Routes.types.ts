import { ReactNode } from 'react';

export type RouteHandleType = {
    isHeaderRequired: boolean;
    isNavbarRequired: boolean;
};

export type GuestRouteProps = {
    children: ReactNode;
};

export type ProtectedRouteProps = {
    children: ReactNode;
};
