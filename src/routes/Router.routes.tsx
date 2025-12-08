import { createBrowserRouter } from 'react-router-dom';

import { AuthLayout, Main, SlotBookingLayout } from '@layout';
import {
    Booking,
    Cinemas,
    LatestMovies,
    Login,
    Movies,
    Profile,
    PurchaseHistory,
    Signup,
    Slots,
} from '@pages';

import { ROUTES } from './Routes.constant';

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
        ],
    },
    {
        path: ROUTES.AUTH,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
            {
                path: ROUTES.SIGNUP,
                element: <Signup />,
            },
        ],
    },
    {
        path: ROUTES.SLOTS,
        element: <SlotBookingLayout />,
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
                path: ROUTES.PURCHASEHISTORY,
                element: <PurchaseHistory />,
            },
            {
                path: ROUTES.PROFILE,
                element: <Profile />,
            },
        ],
    },
]);
