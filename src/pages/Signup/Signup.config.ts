import { ConfigType } from '@containers';

import { Message } from './Signup.constants';

export const SignupConfig: ConfigType = {
    title: 'Signup',
    link: {
        message: Message.LINK_MESSAGE,
        value: 'Login',
        url: '/auth',
    },
    fields: [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            validation: {
                required: Message.NAME_REQUIRED,
                maxLength: {
                    value: 100,
                    message: Message.NAME_LONG,
                },
                pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: Message.NAME_VALID,
                },
            },
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            validation: {
                required: Message.REQUIRED_EMAIL,
                maxLength: {
                    value: 254,
                    message: Message.EMAIL_LONG,
                },
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: Message.VALID_EMAIL,
                },
            },
        },
        {
            label: 'Phone Number',
            name: 'phone_number',
            type: 'number',
            validation: {
                required: Message.PHONE_NUMBER_REQUIRED,
                pattern: {
                    value: /\d{10}$/,
                    message: Message.PHONE_NUMBER_VALID,
                },
            },
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            validation: {
                required: Message.PASSWORD_REQUIRED,
                minLength: {
                    value: 8,
                    message: Message.PASSWORD_LENGTH,
                },
                pattern: {
                    value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$/,
                    message: Message.PASSWORD_VALID,
                },
            },
        },
        {
            label: 'Confirm Password',
            name: 'confirm_password',
            type: 'password',
            validation: {
                required: Message.PASSWORD_REQUIRED,
            },
        },
    ],
};
