import { CardPaginatedDataType } from '@components';
import { DialogDataType } from '@components';
import { BACKEND_URL } from '@constants';
import {
    GenreFilterType,
    LanguageFilterType,
    MovieDataType,
    MovieFilterTypes,
    MovieResponseType,
} from '@types';

import {
    parseGenreFilter,
    parseLanguageFilter,
    parseMovie,
} from './movieApi.parser';
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

                if (queryArg.language) {
                    queryArg.language.map((param) =>
                        params.append('language', String(param)),
                    );
                }

                if (queryArg.genre) {
                    queryArg.genre.map((param) =>
                        params.append('genre', String(param)),
                    );
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
        getLanguageFilters: builder.query<DialogDataType[], void>({
            query: () => ({
                url: BACKEND_URL.LANGUAGE,
            }),
            transformResponse: (response: LanguageFilterType[]) =>
                response.map(parseLanguageFilter),
        }),
        getGenresFilters: builder.query<DialogDataType[], void>({
            query: () => ({
                url: BACKEND_URL.GENRE,
            }),
            transformResponse: (response: GenreFilterType[]) =>
                response.map(parseGenreFilter),
        }),
        getMoviesByName: builder.query<MovieDataType, string>({
            query: (name) => ({
                url: `movies/${name}`,
            }),
        }),
    }),
});

export const {
    useGetMoviesInfiniteQuery,
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
    useGetMoviesByNameQuery,
} = movieApi;
