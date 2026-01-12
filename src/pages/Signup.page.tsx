import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@app';
import {
    ACCESS_COOKIE_EXPIRES_IN_MINUTES,
    COOKIE_EXPIRES_IN_DAYS,
    ROUTES,
    SIGNUP_CONFIG,
    SIGNUP_MESSAGES,
} from '@constants';
import { Form } from '@containers';
import { showSnackbar, syncAuthState } from '@features';
import { SignupRequest, useSignupUserMutation } from '@services';

const Signup = () => {
    const [signupUser] = useSignupUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            const response = await signupUser(data).unwrap();
            Cookies.set('access', response.access, {
                expires: ACCESS_COOKIE_EXPIRES_IN_MINUTES / (24 * 60),
                secure: true,
                sameSite: 'strict',
            });
            Cookies.set('refresh', response.refresh, {
                expires: COOKIE_EXPIRES_IN_DAYS,
                secure: true,
                sameSite: 'strict',
            });
            dispatch(
                showSnackbar({
                    message: [SIGNUP_MESSAGES.SIGNUP_SUCCESS],
                    variant: 'success',
                }),
            );
            dispatch(syncAuthState(!!Cookies.get('refresh')));
            void navigate(ROUTES.ROOT);
        } catch (error) {
            const ErrorsList: string[] = [];
            const errorData = (error as { data: Record<string, string[]> })
                .data;
            Object.keys(errorData).forEach((fieldName) => {
                const messages = errorData[fieldName];

                messages.forEach((message) => {
                    ErrorsList.push(message);
                });
            });
            dispatch(showSnackbar({ message: ErrorsList, variant: 'error' }));
        }
    };

    return <Form {...SIGNUP_CONFIG} onSubmit={handleSubmit} />;
};

export default Signup;
