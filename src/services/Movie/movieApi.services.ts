import { CardPaginatedDataType } from 'components/Card/Card.types';

import { MovieFilterTypes, MovieResponseType } from '@types';

import { parseMovie } from './movieApi.parser';
import { baseApi } from '../Base';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query<CardPaginatedDataType, MovieFilterTypes>({
            query: (args) => {
                const params = new URLSearchParams();
                if (args.latest) {
                    params.set('latest', String(args.latest));
                }

                return {
                    url: 'movies/',
                    params,
                };
            },
            transformResponse: (response: MovieResponseType) => ({
                next: response.next,
                previous: response.previous,
                results: response.results.map(parseMovie),
            }),
        }),
    }),
});

export const { useGetMoviesQuery, useLazyGetMoviesQuery } = movieApi;
