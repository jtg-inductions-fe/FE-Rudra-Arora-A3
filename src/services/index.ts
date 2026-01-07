import type { LoginRequest, SignupRequest } from './Auth';
import { useLoginUserMutation, useSignupUserMutation } from './Auth';
import { baseApi } from './Base';
import { useGetMoviesInfiniteQuery } from './Movie';
import { useLazyGetUserProfileQuery } from './User';

export {
    useLazyGetUserProfileQuery,
    useLoginUserMutation,
    useSignupUserMutation,
    LoginRequest,
    SignupRequest,
    baseApi,
    useGetMoviesInfiniteQuery,
};
