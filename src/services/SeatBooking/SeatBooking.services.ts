import { SeatBookingResponseType } from '@types';

import { baseApi } from '../Base';

export const seatBookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        seatBooking: builder.mutation<
            SeatBookingResponseType,
            { id: number; seat_ids: number[] }
        >({
            query: ({ id, seat_ids }) => ({
                url: `cinemas/movie-slots/${id}/bookings/`,
                method: 'POST',
                isProtected: true,
                body: { seat_ids },
            }),
        }),
    }),
});

export const { useSeatBookingMutation } = seatBookingApi;
