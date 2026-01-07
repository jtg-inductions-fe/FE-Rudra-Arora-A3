import type { LoginRequest, SignupRequest } from './auth.types';
import {
    useLoginUserMutation,
    useSignupUserMutation,
} from './authApi.services';

export {
    useLoginUserMutation,
    useSignupUserMutation,
    LoginRequest,
    SignupRequest,
};
