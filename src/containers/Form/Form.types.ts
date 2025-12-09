export type PayloadType = {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    confirm_password: string;
};

export type ConfigType = {
    title: string;
    link?: {
        message: string;
        value: string;
        url: string;
    };
    fields: {
        label: string;
        name: keyof PayloadType;
        type: string;
        validation: {
            required: string;
            maxLength?: {
                value: number;
                message: string;
            };
            minLength?: {
                value: number;
                message: string;
            };
            pattern?: {
                value: RegExp;
                message: string;
            };
        };
    }[];
};

export type FormProps = ConfigType & {
    onSubmit: (data: PayloadType) => Promise<void>;
};
