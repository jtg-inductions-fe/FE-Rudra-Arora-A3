import { SlotCardDataType } from '@components';
import { BACKEND_URL } from '@constants';
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
                url: BACKEND_URL.GET_CINEMAS_SLOTS(id),
                params: { date: param },
            }),
            transformResponse: (response: CinemaSlotsResponseType[]) =>
                response.map(parseCinemaSlotApi),
        }),
    }),
});

export const { useLazyGetCinemaSlotsQuery } = cinemaSlotsApi;
