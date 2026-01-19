import { FieldConfig, PurchaseType } from '@types';

export const FORM_FIELDS: FieldConfig[] = [
    {
        name: 'name',
        label: 'Name',
        rules: { required: 'Name is required' },
    },
    {
        name: 'phone_number',
        label: 'Phone Number',
        rules: {
            required: 'Phone number is required',
            minLength: { value: 10, message: 'Minimum 10 digits' },
            pattern: { value: /^[0-9]+$/, message: 'Only digits allowed' },
        },
    },
];

export const PURCHASE_HISTORY_FIELDS = [
    {
        label: 'Upcoming Bookings',
        param: 'upcoming',
    },
    {
        label: 'Past Bookings',
        param: 'past',
    },
    {
        label: 'Cancelled Bookings',
        param: 'cancel',
    },
] as const;

export const GET_PURCHASE_PAGE_HEADING = (param: PurchaseType): string => {
    if (param === 'upcoming') {
        return 'Your Upcoming Bookings';
    }
    if (param === 'cancel') {
        return 'Your Cancelled Bookings';
    }
    return 'Your Past Bookings';
};
