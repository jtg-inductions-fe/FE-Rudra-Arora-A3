import { toCapitalized } from 'utils';

import { InfoCardDataType } from '@components';
import { BACKEND_URL } from '@constants';
import { PaginatedResponseType, PurchaseHistoryResponseType } from '@types';

import { parsePurchaseHistoryResponse } from './user.parser';
import { UserResponseType } from './user.types';
import { baseApi } from '../Base';

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserProfile: builder.query<UserResponseType, void>({
            query: () => ({
                url: BACKEND_URL.USER_PROFILE,
                isProtected: true,
            }),
            transformResponse: (response: UserResponseType) => ({
                ...response,
                name: toCapitalized(response.name),
            }),
        }),
        userUpdate: builder.mutation<
            UserResponseType,
            { name: string; phone_number: string }
        >({
            query: ({ name, phone_number }) => ({
                url: BACKEND_URL.USER_PROFILE,
                isProtected: true,
                method: 'PATCH',
                body: { name, phone_number },
            }),
        }),
        getPurchaseHistory: builder.infiniteQuery<
            PaginatedResponseType<InfoCardDataType[]>,
            { purchase: 'upcoming' | 'cancel' | 'past' },
            string | null
        >({
            query: ({ pageParam, queryArg }) => ({
                url: pageParam ? pageParam : BACKEND_URL.PURCHASE_HISTORY,
                params: queryArg,
                isProtected: true,
            }),
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (nextPage) => nextPage.next,
            },
            transformResponse: (
                response: PaginatedResponseType<PurchaseHistoryResponseType[]>,
            ) => ({
                next: response.next,
                previous: response.previous,
                results: response.results.map(parsePurchaseHistoryResponse),
            }),
        }),
    }),
});

export const {
    useLazyGetUserProfileQuery,
    useUserUpdateMutation,
    useGetPurchaseHistoryInfiniteQuery,
} = userApi;
