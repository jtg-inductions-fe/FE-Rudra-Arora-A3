import { SlotCardDataType } from '@components';
import { CinemaSlotsResponseType } from '@types';

import { parseCinemaSlotApi } from './cinemaSlots.parser';
import { baseApi } from '../Base';

export const cinemaSlotsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getCinemaSlots: builder.query<
            SlotCardDataType[],
            { id: number; param: string }
        >({
            query: ({ id, param }) => ({
                url: `cinemas/${id}/movie-slots/`,
                params: { date: param },
            }),
            transformResponse: (response: CinemaSlotsResponseType[]) =>
                response.map(parseCinemaSlotApi),
        }),
    }),
});

export const { useLazyGetCinemaSlotsQuery } = cinemaSlotsApi;
