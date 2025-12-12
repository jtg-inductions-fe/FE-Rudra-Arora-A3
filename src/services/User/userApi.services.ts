import { baseApi } from 'services/Base';

import { UserResponseType } from './user.types';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<UserResponseType, void>({
            query: () => ({
                url: 'users/me/',
                isProtected: true,
            }),
        }),
    }),
});

export const { useLazyGetUserProfileQuery } = userApi;
