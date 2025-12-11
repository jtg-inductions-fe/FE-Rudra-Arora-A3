import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants';
import { AuthLayout, Main } from '@layout';
import {
    Booking,
    Cinemas,
    Error,
    LatestMovies,
    Login,
    Movies,
    NotFound,
    Profile,
    PurchaseHistory,
    Signup,
    Slots,
} from '@pages';

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Main />,
        children: [
            {
                index: true,
                element: <LatestMovies />,
            },
            {
                path: ROUTES.CINEMAS,
                element: <Cinemas />,
            },
            {
                path: ROUTES.MOVIES,
                element: <Movies />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    {
        path: ROUTES.LOGIN,
        element: <AuthLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: ROUTES.SIGNUP,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Signup />,
            },
        ],
    },
    {
        path: ROUTES.SLOTS,
        element: <Main />,
        handle: {
            isHeaderRequired: false,
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: <Slots />,
            },
            {
                path: ROUTES.BOOKING,
                element: <Booking />,
            },
            {
                path: ROUTES.PURCHASE_HISTORY,
                element: <PurchaseHistory />,
            },
            {
                path: ROUTES.PROFILE,
                element: <Profile />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
