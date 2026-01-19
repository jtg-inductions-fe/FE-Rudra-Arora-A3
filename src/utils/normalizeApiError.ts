import errorBackgroundImage from '@assets/images/internal-error-bg.webp';
import notFoundImage from '@assets/images/notfoundbg.webp';
import { ROUTES } from '@constants';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export const normalizeApiError = (
    error: FetchBaseQueryError | SerializedError,
) => {
    if (!('status' in error)) {
        return {
            image: errorBackgroundImage,
            title: 'Unexpected Error',
            body: error.message ?? 'Something went wrong.',
        };
    }

    if (typeof error.status !== 'number' && !('originalStatus' in error)) {
        return {
            image: errorBackgroundImage,
            title: 'Server Error',
            body: 'Something went wrong.',
        };
    }

    if ('originalStatus' in error) {
        return {
            image: notFoundImage,
            title: 'Data Not Found',
            body: 'The requested resource does not exist.',
            buttonText: 'Go Home',
            to: ROUTES.ROOT,
        };
    }

    switch (error.status) {
        case 404:
            return {
                image: notFoundImage,
                title: 'Data Not Found',
                body: 'The requested resource does not exist.',
                buttonText: 'Go Home',
                to: ROUTES.ROOT,
            };

        case 500:
            return {
                image: errorBackgroundImage,
                title: 'Server Error',
                body: 'Something went wrong on our side.',
            };
        case 401:
            return {
                image: errorBackgroundImage,
                title: 'Session Expired',
                body: 'Please login again.',
                buttonText: 'Login',
                to: ROUTES.LOGIN,
            };

        default:
            return {
                image: errorBackgroundImage,
                title: 'Unexpected Error',
                body: 'Something went wrong.',
            };
    }
};
