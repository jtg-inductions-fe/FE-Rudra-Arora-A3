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
        getCinemas: builder.query<CardPaginatedDataType, CinemaFilterTypes>({
            query: (params) => ({
                url: 'cinemas/',
                params: params,
            }),
            transformResponse: (response: CinemaResponseType) => ({
                next: response.next,
                previous: response.previous,
                results: response.results.map(cinemaApiParser),
            }),
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

export const { useGetCinemasQuery, useGetLocationFilterQuery } = cinemaApi;
