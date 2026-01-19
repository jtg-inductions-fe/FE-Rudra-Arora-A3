import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@app';
import { ErrorBoundary } from '@components';
import { ROUTES, SIGNUP_CONFIG, SIGNUP_MESSAGES } from '@constants';
import { Form } from '@containers';
import { showSnackbar } from '@features';
import { SignupRequest, useSignupUserMutation } from '@services';

const Signup = () => {
    const [signupUser, { error: signupError }] = useSignupUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            await signupUser(data).unwrap();
            dispatch(
                showSnackbar({
                    message: [SIGNUP_MESSAGES.SIGNUP_SUCCESS],
                    variant: 'success',
                }),
            );
            void navigate(ROUTES.LOGIN);
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

    return (
        <ErrorBoundary error={signupError}>
            <Form {...SIGNUP_CONFIG} onSubmit={handleSubmit} />
        </ErrorBoundary>
    );
};

export default Signup;
