import { InfoCardDataType } from '@components';
import { BACKEND_URL } from '@constants';
import { SeatBookingResponseType } from '@types';

import { parseBookingResponse } from './SeatBooking.parser';
import { baseApi } from '../Base';

export const seatBookingApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        seatBooking: builder.mutation<
            InfoCardDataType,
            { id: number; seat_ids: number[] }
        >({
            query: ({ id, seat_ids }) => ({
                url: BACKEND_URL.GET_SEAT_BOOKING(id),
                method: 'POST',
                isProtected: true,
                body: { seat_ids },
            }),
            transformResponse: (response: SeatBookingResponseType) =>
                parseBookingResponse(response),
        }),
        seatCancel: builder.mutation<void, { id: number }>({
            query: ({ id }) => ({
                url: BACKEND_URL.GET_SEAT_CANCEL(id),
                method: 'PATCH',
                isProtected: true,
            }),
        }),
    }),
});

export const { useSeatBookingMutation, useSeatCancelMutation } = seatBookingApi;
