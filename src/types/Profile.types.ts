export type FormValues = {
    name: string;
    phone_number: string;
};

export type FieldConfig = {
    name: keyof FormValues;
    label: string;
    rules?: object;
};

export type PurchasedSlotDataType = {
    cinema: string;
    location: string;
    movie: string;
    start_time: string;
    end_time: string;
    price: number;
};

export type PurchasedSeatType = {
    row: number;
    seat: number;
};

export type PurchaseHistoryResponseType = {
    id: number;
    status: 'B' | 'C';
    created_at: string;
    slot: PurchasedSlotDataType[];
    seats: PurchasedSeatType[];
};

export const VALID_PURCHASE_TYPES = ['upcoming', 'cancel', 'past'] as const;

export type PurchaseType = (typeof VALID_PURCHASE_TYPES)[number];
