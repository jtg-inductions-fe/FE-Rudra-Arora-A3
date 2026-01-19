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
