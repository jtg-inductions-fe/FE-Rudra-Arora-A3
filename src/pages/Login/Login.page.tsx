import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

import { Form } from '@containers';
import { LoginRequest, useLoginUserMutation } from '@features';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { LoginConfig } from './Login.config';
import {
    CookieExpiresinMinutes,
    ErrorMessage,
    Message,
} from './Login.constants';

export const Login = () => {
    const [loginUser] = useLoginUserMutation();

    const handleSubmit = async (data: LoginRequest) => {
        try {
            const response = await loginUser(data).unwrap();
            Cookies.set('token', response.access, {
                expires: CookieExpiresinMinutes / (24 * 60),
            });
            toast.success(Message.LOGIN_SUCCESS);
        } catch (error) {
            const err = error as FetchBaseQueryError;
            if (err.status === 401) {
                toast.error(ErrorMessage.INVALID_CREDENTIALS);
            }
        }
    };

    return (
        <>
            <Form {...LoginConfig} onSubmit={handleSubmit} />
        </>
    );
};
