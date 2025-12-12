import { ACCESS_COOKIE_EXPIRES_IN_MINUTES } from 'constants/Login.constants';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@app';
import {
    COOKIE_EXPIRES_IN_DAYS,
    LOGIN_CONFIG,
    LOGIN_MESSAGES,
    ROUTES,
} from '@constants';
import { Form } from '@containers';
import { showSnackbar, syncAuthState } from '@features';
import { LoginRequest, useLoginUserMutation } from '@services';

const Login = () => {
    const [loginUser] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: LoginRequest) => {
        try {
            const response = await loginUser(data).unwrap();
            Cookies.set('access', response.access, {
                expires: (1 / 24) * 60 * ACCESS_COOKIE_EXPIRES_IN_MINUTES,
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
                    message: [LOGIN_MESSAGES.LOGIN_SUCCESS],
                    variant: 'success',
                }),
            );
            void navigate(ROUTES.ROOT);
            dispatch(syncAuthState());
        } catch (error) {
            const ErrorsList: string[] = [];
            const errorData = (error as { data: Record<string, string> }).data;
            ErrorsList.push(errorData.detail);
            dispatch(showSnackbar({ message: ErrorsList, variant: 'error' }));
        }
    };

    return <Form {...LOGIN_CONFIG} onSubmit={handleSubmit} />;
};

export default Login;
