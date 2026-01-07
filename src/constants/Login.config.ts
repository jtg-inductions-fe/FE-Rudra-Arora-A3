import { ConfigType } from '@containers';

import { MESSAGE, REGULAR_EXPRESSIONS } from './Login.constants';
import { ROUTES } from './Routes.constant';

export const LOGIN_CONFIG: ConfigType = {
    title: 'Login',
    link: {
        message: MESSAGE.LINK_MESSAGE,
        value: 'Signup',
        url: ROUTES.SIGNUP,
    },
    fields: [
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            validation: {
                required: MESSAGE.REQUIRED_EMAIL,
                maxLength: {
                    value: 254,
                    message: MESSAGE.EMAIL_LONG,
                },
                pattern: {
                    value: REGULAR_EXPRESSIONS.EMAIL,
                    message: MESSAGE.VALID_EMAIL,
                },
            },
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            validation: {
                required: MESSAGE.PASSWORD_REQUIRED,
                minLength: {
                    value: 8,
                    message: MESSAGE.PASSWORD_LENGTH,
                },
                pattern: {
                    value: REGULAR_EXPRESSIONS.PASSWORD,
                    message: MESSAGE.PASSWORD_VALID,
                },
            },
        },
    ],
};
