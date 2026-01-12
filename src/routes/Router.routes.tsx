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
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <LatestMovies />,
            },
            {
                path: ROUTES.CINEMAS,
                element: (
                    <RouteLoader>
                        <Cinemas />
                    </RouteLoader>
                ),
            },
            {
                path: ROUTES.MOVIES,
                element: (
                    <RouteLoader>
                        <Movies />
                    </RouteLoader>
                ),
            },
            {
                path: ROUTES.SPECIFIC_MOVIE,
                element: (
                    <RouteLoader>
                        <MovieDetail />
                    </RouteLoader>
                ),
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
                element: (
                    <RouteLoader>
                        <Login />
                    </RouteLoader>
                ),
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
                element: (
                    <RouteLoader>
                        <Signup />
                    </RouteLoader>
                ),
            },
        ],
    },
    {
        path: ROUTES.MOVIE_SLOTS,
        element: <Main />,
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: (
                    <RouteLoader>
                        <MovieSlots />
                    </RouteLoader>
                ),
            },
        ],
    },
    {
        path: ROUTES.CINEMA_SLOTS,
        element: <Main />,
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: (
                    <RouteLoader>
                        <CinemaSlots />
                    </RouteLoader>
                ),
            },
        ],
    },
    {
        path: ROUTES.SEAT_AVAILABILITY,
        element: <Main />,
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <RouteLoader>
                            <SeatChoosing />
                        </RouteLoader>
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: ROUTES.PROFILE,
        element: <Main />,
        handle: {
            isNavbarRequired: false,
        },
        children: [
            {
                index: true,
                element: (
                    <ProtectedRoute>
                        <RouteLoader>
                            <Profile />
                        </RouteLoader>
                    </ProtectedRoute>
                ),
            },
            {
                path: ROUTES.PURCHASE_HISTORY,
                element: (
                    <ProtectedRoute>
                        <RouteLoader>
                            <PurchaseHistory />
                        </RouteLoader>
                    </ProtectedRoute>
                ),
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
