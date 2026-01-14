import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { hashPassword } from 'utils/hashPassword';

import { useAppDispatch } from '@app';
import {
    COOKIE_EXPIRES_IN_DAYS,
    ROUTES,
    SIGNUP_CONFIG,
    SIGNUP_MESSAGES,
} from '@constants';
import { Form } from '@containers';
import { setAccessToken, showSnackbar, syncAuthState } from '@features';
import { SignupRequest, useSignupUserMutation } from '@services';

const Signup = () => {
    const [signupUser] = useSignupUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            const hashedPassword = await hashPassword(data.password);
            const hashedConfirmPassword = await hashPassword(
                data.confirm_password,
            );
            const signupPayload = {
                ...data,
                password: hashedPassword,
                confirm_password: hashedConfirmPassword,
            };
            const response = await signupUser(signupPayload).unwrap();
            dispatch(setAccessToken(response.access));
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
