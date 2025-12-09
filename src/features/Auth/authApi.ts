import {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
} from './authTypes';
import { baseApi } from '../Base';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: 'users/login/',
                method: 'POST',
                body,
            }),
        }),
        signupUser: builder.mutation<SignupResponse, SignupRequest>({
            query: (body) => ({
                url: 'users/signup/',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApi;
