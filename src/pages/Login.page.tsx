import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { hashPassword } from 'utils/hashPassword';

import { useAppDispatch } from '@app';
import {
    COOKIE_EXPIRES_IN_DAYS,
    LOGIN_CONFIG,
    LOGIN_MESSAGES,
    ROUTES,
} from '@constants';
import { Form } from '@containers';
import { setAccessToken, showSnackbar, syncAuthState } from '@features';
import { LoginRequest, useLoginUserMutation } from '@services';

const Login = () => {
    const [loginUser] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: LoginRequest) => {
        try {
            const hashedPassword = await hashPassword(data.password);
            const loginPayload = {
                ...data,
                password: hashedPassword,
            };
            const response = await loginUser(loginPayload).unwrap();
            dispatch(setAccessToken(response.access));
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
            dispatch(syncAuthState(!!Cookies.get('refresh')));
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
