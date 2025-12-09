export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    access: string;
};

export type SignupRequest = {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
};

export type SignupResponse = {
    name: string;
    email: string;
    phone_number: string;
};
