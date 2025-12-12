import { ConfigType } from '@containers';

import { Message, RegularExpressions } from './Signup.constants';

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
                    value: RegularExpressions.NAME,
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
                    value: RegularExpressions.EMAIL,
                    message: Message.VALID_EMAIL,
                },
            },
        },
        {
            label: 'Phone Number',
            name: 'phone_number',
            type: 'tel',
            validation: {
                required: Message.PHONE_NUMBER_REQUIRED,
                pattern: {
                    value: RegularExpressions.PHONE_NUMBER,
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
                    value: RegularExpressions.PHONE_NUMBER,
                    message: Message.PASSWORD_VALID,
                },
            },
        },
        {
            label: 'Confirm Password',
            name: 'confirm_password',
            type: 'password',
            validation: {
                required: Message.CONFIRM_PASSWORD_REQUIRED,
            },
        },
    ],
};
