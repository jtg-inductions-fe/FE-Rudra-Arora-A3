export const ERROR_MESSAGE = {
    INVALID_CREDENTIALS: 'Invalid credentials',
};

export const MESSAGE = {
    LOGIN_SUCCESS: 'Login Successful',
    LINK_MESSAGE: 'Didn`t have an account?',
    VALID_EMAIL: 'Enter a valid Email',
    REQUIRED_EMAIL: 'Email is Required',
    PASSWORD_LENGTH: 'Password length should be at least 8',
    PASSWORD_REQUIRED: 'Password is required',
    PASSWORD_VALID:
        'Password must have at least one lowercase letter, one uppercase letter, one number and one special character',
    EMAIL_LONG: 'Email is too long',
};

export const COOKIE_EXPIRES_IN_DAYS = 7;

export const REGULAR_EXPRESSIONS = {
    EMAIL: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$/,
};
