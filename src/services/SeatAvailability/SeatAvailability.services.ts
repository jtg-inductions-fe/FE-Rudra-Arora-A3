import { SeatChoosingDataType } from 'containers/SeatChoosing/SeatChoosing.types';
import { baseApi } from 'services/Base';

import { SeatAvailabilityResponseType } from '@types';

import { parseSeatAvailabilityResponse } from './SeatAvailability.parser';

export const seatAvailabilityApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSeatAvailability: builder.query<
            SeatChoosingDataType,
            { id: number }
        >({
            query: ({ id }) => ({
                url: `cinemas/slots/${id}/seats/`,
            }),
            transformResponse: (response: SeatAvailabilityResponseType) =>
                parseSeatAvailabilityResponse(response),
        }),
    }),
});

export const { useGetSeatAvailabilityQuery } = seatAvailabilityApi;
