import { toCapitalized } from 'utils';

import { CardPaginatedDataType, DialogDataType } from '@components';
import { BACKEND_URL } from '@constants';
import {
    CinemaDataType,
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
                url: pageParam ? pageParam : BACKEND_URL.CINEMAS,
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
                url: BACKEND_URL.LOCATION,
            }),
            transformResponse: (response: LocationFilterType[]) =>
                response.map(parseLocationFilter),
        }),
        getCinemaByName: builder.query<CinemaDataType, string>({
            query: (name) => ({
                url: BACKEND_URL.GET_SPECIFIC_CINEMA(name),
            }),
            transformResponse: (response: CinemaDataType) => ({
                ...response,
                name: `${toCapitalized(response.name)} ${toCapitalized(response.location)}`,
            }),
        }),
    }),
});

export const {
    useGetLocationFilterQuery,
    useGetCinemasInfiniteQuery,
    useGetCinemaByNameQuery,
} = cinemaApi;
