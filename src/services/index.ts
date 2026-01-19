import type { LoginRequest, SignupRequest } from './Auth';
import { useLoginUserMutation, useSignupUserMutation } from './Auth';
import { baseApi } from './Base';
import {
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
} from './Cinema';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesByNameQuery,
    useGetMoviesInfiniteQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
} from './Movie';
import { useLazyGetMovieSlotsQuery } from './MovieSlots';
import { useLazyGetUserProfileQuery } from './User';

export {
    useLazyGetUserProfileQuery,
    useLoginUserMutation,
    useSignupUserMutation,
    LoginRequest,
    SignupRequest,
    baseApi,
    useGetMoviesInfiniteQuery,
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
    useGetMoviesByNameQuery,
    useLazyGetMovieSlotsQuery,
};
