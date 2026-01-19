import { ACCESS_COOKIE_EXPIRES_IN_MINUTES } from 'constants/Login.constants';
import {
    AUTHENTICATED_ENDPOINTS,
    BACKEND_URL,
} from 'constants/Routes.constant';
import Cookies from 'js-cookie';

import { clearUser, syncAuthState } from '@features';
import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

/**
 * This is raw base query that takes Vite base api url and
 * prepare headers for the authenticated endpoints only
 */
const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: 'include',
    prepareHeaders: (headers, { endpoint }) => {
        const token = Cookies.get('access');
        if (token && AUTHENTICATED_ENDPOINTS.includes(endpoint)) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

type CustomFetchArgs = {
    isProtected?: boolean;
} & FetchArgs;

type RefreshResponseType = {
    access: string;
};

/**
 * A wrapper of fetchBaseQuery which perform checks like checking of
 * refresh and access token expiry for protected routes only
 * @param args
 * @param api
 * @param extraOptions
 */

export const baseQueryWithReauth: BaseQueryFn<
    string | CustomFetchArgs,
    unknown,
    FetchBaseQueryError
> = async (
    args,
    api,
    extraOptions,
): Promise<{ data: unknown } | { error: FetchBaseQueryError }> => {
    const isProtected = (args as CustomFetchArgs)?.isProtected ?? false;

    if (isProtected) {
        const accessToken = Cookies.get('access');
        const refreshToken = Cookies.get('refresh');

        if (!refreshToken) {
            Cookies.remove('refresh');
            api.dispatch(syncAuthState(!!Cookies.get('refresh')));
            api.dispatch(clearUser());
            return { error: { status: 401, data: 'Unauthorized' } };
        } else if (!accessToken) {
            const refreshResult = await rawBaseQuery(
                {
                    url: BACKEND_URL.TOKEN_REFRESH,
                    method: 'POST',
                    body: JSON.stringify({ refresh: refreshToken }),
                    headers: { 'Content-Type': 'application/json' },
                },
                api,
                extraOptions,
            );

            if (refreshResult.error) {
                Cookies.remove('refresh');
                api.dispatch(syncAuthState(!!Cookies.get('refresh')));
                api.dispatch(clearUser());
                return { error: { status: 401, data: 'Unauthorized' } };
            } else {
                const access = (refreshResult.data as RefreshResponseType)
                    .access;
                Cookies.set('access', access, {
                    expires: ACCESS_COOKIE_EXPIRES_IN_MINUTES / (24 * 60),
                    secure: true,
                    sameSite: 'strict',
                });
            }
        }
    }
    return await rawBaseQuery(args, api, extraOptions);
};

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
