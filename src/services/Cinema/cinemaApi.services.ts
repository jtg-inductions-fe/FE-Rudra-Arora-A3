import { CardPaginatedDataType, DialogDataType } from '@components';
import {
    CinemaFilterTypes,
    CinemaResponseType,
    LocationFilterType,
} from '@types';

import { cinemaApiParser, parseLocationFilter } from './cinemaApi.parser';
import { baseApi } from '../Base';

export const cinemaApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCinemas: builder.infiniteQuery<
            CardPaginatedDataType,
            CinemaFilterTypes,
            string | null
        >({
            query: ({ pageParam, queryArg }) => ({
                url: pageParam ? pageParam : 'cinemas/',
                params: queryArg,
            }),
            transformResponse: (response: CinemaResponseType) => ({
                next: response.next,
                previous: response.previous,
                results: response.results.map(cinemaApiParser),
            }),
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (nextPage) => nextPage.next,
            },
        }),
        getLocationFilter: builder.query<DialogDataType[], void>({
            query: () => ({
                url: 'cinemas/locations/',
            }),
            transformResponse: (response: LocationFilterType[]) =>
                response.map(parseLocationFilter),
        }),
    }),
});

export const { useGetLocationFilterQuery, useGetCinemasInfiniteQuery } =
    cinemaApi;
