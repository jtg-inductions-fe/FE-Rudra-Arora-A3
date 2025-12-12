import type { LoginRequest, SignupRequest } from './auth.types';
import {
    authApi,
    useLoginUserMutation,
    useSignupUserMutation,
} from './authAPi.services';

export {
    useLoginUserMutation,
    useSignupUserMutation,
    authApi,
    LoginRequest,
    SignupRequest,
};
