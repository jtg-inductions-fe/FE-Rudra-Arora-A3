import { BACKEND_URL } from '@constants';

import { UserResponseType } from './user.types';
import { baseApi } from '../Base';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<UserResponseType, void>({
            query: () => ({
                url: BACKEND_URL.USER_PROFILE,
                isProtected: true,
            }),
        }),
    }),
});

export const { useLazyGetUserProfileQuery } = userApi;
