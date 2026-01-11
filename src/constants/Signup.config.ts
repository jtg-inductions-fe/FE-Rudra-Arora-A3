import { ConfigType } from '@containers';

import { ROUTES } from './Routes.constant';
import { MESSAGE, REGULAR_EXPRESSIONS } from './Signup.constants';

export const SIGNUP_CONFIG: ConfigType = {
    title: 'Signup',
    link: {
        message: MESSAGE.LINK_MESSAGE,
        value: 'Login',
        url: ROUTES.LOGIN,
    },
    fields: [
        {
            label: 'Name',
            name: 'name',
            type: 'text',
            validation: {
                required: MESSAGE.NAME_REQUIRED,
                maxLength: {
                    value: 100,
                    message: MESSAGE.NAME_LONG,
                },
                pattern: {
                    value: REGULAR_EXPRESSIONS.NAME,
                    message: MESSAGE.NAME_VALID,
                },
            },
        },
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
            label: 'Phone Number',
            name: 'phone_number',
            type: 'tel',
            validation: {
                required: MESSAGE.PHONE_NUMBER_REQUIRED,
                pattern: {
                    value: REGULAR_EXPRESSIONS.PHONE_NUMBER,
                    message: MESSAGE.PHONE_NUMBER_VALID,
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
        {
            label: 'Confirm Password',
            name: 'confirm_password',
            type: 'password',
            validation: {
                required: MESSAGE.CONFIRM_PASSWORD_REQUIRED,
            },
        },
    ],
};
