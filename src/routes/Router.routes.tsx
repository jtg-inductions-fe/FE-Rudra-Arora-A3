import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { RouteLoader } from '@components';
import { ROUTES } from '@constants';
import { AuthLayout } from '@layout';
import { Error, LatestMovies, NotFound } from '@pages';

import GuestRoute from './GuestRoute';
import ProtectedRoute from './ProtectedRoute';

const Cinemas = lazy(() => import('@pages/Cinemas.page.tsx'));
const Movies = lazy(() => import('@pages/Movies.page'));
const MovieDetail = lazy(() => import('@pages/MovieDetail.page.tsx'));
const MovieSlots = lazy(() => import('@pages/MovieSlots.page.tsx'));
const CinemaSlots = lazy(() => import('@pages/CinemaSlots.page.tsx'));
const SeatChoosing = lazy(() => import('@pages/SeatChoosing.page.tsx'));
const Profile = lazy(() => import('@pages/Profile.page.tsx'));
const PurchaseHistory = lazy(() => import('@pages/PurchaseHistory.page.tsx'));
const Login = lazy(() => import('@pages/Login.page.tsx'));
const Signup = lazy(() => import('@pages/Signup.page.tsx'));
const Main = lazy(() => import('@layout/Main.layout.tsx'));

export const router = createBrowserRouter([
    {
        path: ROUTES.ROOT,
        element: (
            <RouteLoader>
                <Main />
            </RouteLoader>
        ),
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
                <RouteLoader>
                    <AuthLayout />
                </RouteLoader>
            </GuestRoute>
        ),
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
        errorElement: <Error />,
        element: (
            <GuestRoute>
                <RouteLoader>
                    <AuthLayout />
                </RouteLoader>
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
        path: ROUTES.MOVIE_SLOTS,
        element: (
            <RouteLoader>
                <Main />
            </RouteLoader>
        ),
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: <MovieSlots />,
            },
        ],
    },
    {
        path: ROUTES.CINEMA_SLOTS,
        element: (
            <RouteLoader>
                <Main />
            </RouteLoader>
        ),
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: <CinemaSlots />,
            },
        ],
    },
    {
        path: ROUTES.SEAT_AVAILABILITY,
        element: (
            <ProtectedRoute>
                <RouteLoader>
                    <Main />
                </RouteLoader>
            </ProtectedRoute>
        ),
        handle: {
            isNavbarRequired: false,
        },
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <SeatChoosing />,
            },
        ],
    },
    {
        path: ROUTES.PROFILE,
        element: (
            <ProtectedRoute>
                <RouteLoader>
                    <Main />
                </RouteLoader>
            </ProtectedRoute>
        ),
        handle: {
            isNavbarRequired: false,
        },
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: ROUTES.PURCHASE_HISTORY,
                element: <PurchaseHistory />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
