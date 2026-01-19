export const ERROR_MESSAGE = {
    USER_EXIST: 'User already exists',
};

export const MESSAGE = {
    SIGNUP_SUCCESS: 'Signup Successful',
    LINK_MESSAGE: 'Already have an account?',
    VALID_EMAIL: 'Enter a valid Email',
    REQUIRED_EMAIL: 'Email is Required',
    PASSWORD_LENGTH: 'Password length should be at least 8',
    PASSWORD_REQUIRED: 'Password is required',
    CONFIRM_PASSWORD_REQUIRED: 'Confirm Password is required',
    PASSWORD_VALID:
        'Password must have at least one lowercase letter, one uppercase letter, one number and one special character',
    NAME_REQUIRED: 'Name is Required',
    NAME_VALID: 'Enter a valid name',
    NAME_LONG: 'Name is too long',
    PHONE_NUMBER_REQUIRED: 'Phone Number is Required',
    PHONE_NUMBER_VALID: 'Enter a valid phone number',
    EMAIL_LONG: 'Email is too long',
};

export const REGULAR_EXPRESSIONS = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$/,
    NAME: /^\S.*[a-zA-Z\s]+$/,
    PHONE_NUMBER: /^\d{10}$/,
};
