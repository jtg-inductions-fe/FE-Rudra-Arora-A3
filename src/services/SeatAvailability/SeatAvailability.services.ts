import { SeatChoosingDataType } from '@containers';
import { SeatAvailabilityResponseType } from '@types';

import { parseSeatAvailabilityResponse } from './SeatAvailability.parser';
import { baseApi } from '../Base';

export const seatAvailabilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSeatAvailability: builder.query<
            SeatChoosingDataType,
            { id: number }
        >({
            query: ({ id }) => ({
                url: `slots/${id}/seats/`,
            }),
            transformResponse: (response: SeatAvailabilityResponseType) =>
                parseSeatAvailabilityResponse(response),
        }),
    }),
});

export const { useGetSeatAvailabilityQuery } = seatAvailabilityApi;
