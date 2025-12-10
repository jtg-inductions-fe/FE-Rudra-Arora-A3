import { useAppDispatch } from '@app';
import { Form } from '@containers';
import { showSnackbar, SignupRequest, useSignupUserMutation } from '@features';

import { SignupConfig } from './Signup.config';
import { Message } from './Signup.constants';

export const Signup = () => {
    const [signupUser] = useSignupUserMutation();
    const dispatch = useAppDispatch();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            await signupUser(data).unwrap();
            dispatch(
                showSnackbar({
                    message: [Message.SIGNUP_SUCCESS],
                    variant: 'success',
                }),
            );
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
