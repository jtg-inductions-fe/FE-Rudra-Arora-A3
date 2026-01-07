import { CardPaginatedDataType } from 'components/Card/Card.types';

import { BACKEND_URL } from '@constants';
import { MovieFilterTypes, MovieResponseType } from '@types';

import { parseMovie } from './movieApi.parser';
import { baseApi } from '../Base';

export const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.infiniteQuery<
            CardPaginatedDataType,
            MovieFilterTypes,
            string | null
        >({
            query: ({ pageParam, queryArg }) => {
                const params = new URLSearchParams();
                if (queryArg.latest) {
                    params.set('latest', String(queryArg.latest));
                }

                return {
                    url: pageParam ? pageParam : BACKEND_URL.MOVIES,
                    params,
                };
            },
            transformResponse: (response: MovieResponseType) => ({
                next: response.next,
                previous: response.previous,
                results: response.results.map(parseMovie),
            }),
            infiniteQueryOptions: {
                initialPageParam: null,
                getNextPageParam: (nextPage) => nextPage.next,
            },
        }),
    }),
});

export const { useGetMoviesInfiniteQuery } = movieApi;
