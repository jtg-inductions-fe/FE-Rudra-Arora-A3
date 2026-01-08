import type { LoginRequest, SignupRequest } from './Auth';
import { useLoginUserMutation, useSignupUserMutation } from './Auth';
import { baseApi } from './Base';
import {
    useGetCinemaByNameQuery,
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
} from './Cinema';
import { useLazyGetCinemaSlotsQuery } from './CinemaSlots';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesByNameQuery,
    useGetMoviesInfiniteQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
} from './Movie';
import { parseSlots, useLazyGetMovieSlotsQuery } from './MovieSlots';
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
    useGetCinemaByNameQuery,
    useLazyGetCinemaSlotsQuery,
    parseSlots,
};
