import { BACKEND_URL } from '@constants';

import {
    LoginRequest,
    LoginResponse,
    SignupRequest,
    SignupResponse,
} from './auth.types';
import { baseApi } from '../Base';

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation<LoginResponse, LoginRequest>({
            query: (body) => ({
                url: BACKEND_URL.LOGIN,
                method: 'POST',
                body,
            }),
        }),
        signupUser: builder.mutation<SignupResponse, SignupRequest>({
            query: (body) => ({
                url: BACKEND_URL.SIGNUP,
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation, useSignupUserMutation } = authApi;
