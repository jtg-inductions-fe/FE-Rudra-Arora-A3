import { ConfigType } from '@containers';

import { Message, RegularExpressions } from './Login.constants';

export const LoginConfig: ConfigType = {
    title: 'Login',
    link: {
        message: Message.LINK_MESSAGE,
        value: 'Signup',
        url: '/auth/signup',
    },
    fields: [
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
                    value: RegularExpressions.PASSWORD,
                    message: Message.PASSWORD_VALID,
                },
            },
        },
    ],
};
