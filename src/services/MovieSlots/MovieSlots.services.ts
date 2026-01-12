import { SlotCardDataType } from '@components';
import { BACKEND_URL } from '@constants';
import { MovieSlotsResponseType } from '@types';

import { parseMovieSlotApi } from './MovieSlots.parser';
import { baseApi } from '../Base';

export const movieSlotsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMovieSlots: builder.query<
            SlotCardDataType[],
            { id: number; param: string }
        >({
            query: ({ id, param }) => ({
                url: BACKEND_URL.GET_MOVIES_SLOTS(id),
                params: { date: param },
            }),
            transformResponse: (response: MovieSlotsResponseType[]) =>
                response.map(parseMovieSlotApi),
        }),
    }),
});

export const { useLazyGetMovieSlotsQuery } = movieSlotsApi;
