import { toast } from 'react-toastify';

import { Form } from '@containers';
import { SignupRequest, useSignupUserMutation } from '@features';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import { SignupConfig } from './Signup.config';
import { ErrorMessage, Message } from './Signup.constants';

export const Signup = () => {
    const [signupUser] = useSignupUserMutation();

    const handleSubmit = async (data: SignupRequest) => {
        try {
            await signupUser(data).unwrap();
            toast.success(Message.SIGNUP_SUCCESS);
        } catch (error) {
            const err = error as FetchBaseQueryError;
            if (err.status === 400) {
                toast.error(ErrorMessage.USER_EXIST);
            }
        }
    };

    return (
        <>
            <Form {...SignupConfig} onSubmit={handleSubmit} />
        </>
    );
};
