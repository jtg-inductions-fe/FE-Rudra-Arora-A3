import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '@constants';
import { AuthLayout, Main } from '@layout';
import {
    Booking,
    Cinemas,
    Error,
    LatestMovies,
    Login,
    MovieDetail,
    Movies,
    NotFound,
    Profile,
    PurchaseHistory,
    Signup,
    Slots,
} from '@pages';

import GuestRoute from './GuestRoute';

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: <Main />,
        errorElement: <Error />,
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
                path: ROUTES.SPECIFIC_MOVIE,
                element: <MovieDetail />,
            },
        ],
    },
    {
        path: ROUTES.LOGIN,
        element: (
            <GuestRoute>
                <AuthLayout />
            </GuestRoute>
        ),
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
    {
        path: ROUTES.SIGNUP,
        errorElement: <Error />,
        element: (
            <GuestRoute>
                <AuthLayout />
            </GuestRoute>
        ),
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
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
