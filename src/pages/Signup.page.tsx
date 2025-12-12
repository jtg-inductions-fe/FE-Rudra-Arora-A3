import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '@app';
import { ROUTES, SignupConfig, SignupMessages } from '@constants';
import { Form } from '@containers';
import { showSnackbar } from '@features';
import { SignupRequest, useSignupUserMutation } from '@services';

const Signup = () => {
    const [signupUser] = useSignupUserMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            await signupUser(data).unwrap();
            dispatch(
                showSnackbar({
                    message: [SignupMessages.SIGNUP_SUCCESS],
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
        <>
            <Form {...SignupConfig} onSubmit={handleSubmit} />
        </>
    );
};

export default Signup;
