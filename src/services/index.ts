import type { LoginRequest, SignupRequest } from './Auth';
import { useLoginUserMutation, useSignupUserMutation } from './Auth';
import { baseApi } from './Base';
import { useGetCinemasQuery, useGetLocationFilterQuery } from './Cinema';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesInfiniteQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
} from './Movie';
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
    useGetCinemasQuery,
    useGetLocationFilterQuery,
};
