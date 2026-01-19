export const SEAT_CHOOSING_CONSTANTS = {
    INFO_STACK: [
        {
            MESSAGE: 'Available',
            VARIANT: 'outlined',
            DISABLED: false,
        },
        {
            MESSAGE: 'Selected',
            VARIANT: 'filled',
            DISABLED: false,
        },
        {
            MESSAGE: 'Sold',
            VARIANT: 'outlined',
            DISABLED: true,
        },
    ],

    KEYS: {
        first: 'Seats',
        second: 'TotalPrice',
    },
} as const;
