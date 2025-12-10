import Cookies from 'js-cookie';

import { useAppDispatch } from '@app';
import { Form } from '@containers';
import { LoginRequest, showSnackbar, useLoginUserMutation } from '@features';

import { LoginConfig } from './Login.config';
import { CookieExpiresinMinutes, Message } from './Login.constants';

export const Login = () => {
    const [loginUser] = useLoginUserMutation();
    const dispatch = useAppDispatch();

    const handleSubmit = async (data: LoginRequest) => {
        try {
            const response = await loginUser(data).unwrap();
            Cookies.set('token', response.access, {
                expires: CookieExpiresinMinutes / (24 * 60),
            });
            dispatch(
                showSnackbar({
                    message: [Message.LOGIN_SUCCESS],
                    variant: 'success',
                }),
            );
        } catch (error) {
            const ErrorsList: string[] = [];
            const errorData = (error as { data: Record<string, string> }).data;
            ErrorsList.push(errorData.detail);
            dispatch(showSnackbar({ message: ErrorsList, variant: 'error' }));
        }
    };

    return (
        <>
            <Form {...LoginConfig} onSubmit={handleSubmit} />
        </>
    );
};
