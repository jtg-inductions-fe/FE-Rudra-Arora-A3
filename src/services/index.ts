import type { LoginRequest, SignupRequest } from './Auth';
import { useLoginUserMutation, useSignupUserMutation } from './Auth';
import { baseApi } from './Base';
import {
    useGetCinemaByNameQuery,
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
} from './Cinema';
import { useLazyGetCinemaSlotsQuery } from './CinemaSlots';
import {
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useGetMoviesByNameQuery,
    useGetMoviesInfiniteQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
} from './Movie';
import { parseSlots, useLazyGetMovieSlotsQuery } from './MovieSlots';
import { useGetSeatAvailabilityQuery } from './SeatAvailability';
import { useSeatBookingMutation, useSeatCancelMutation } from './SeatBooking';
import {
    useGetPurchaseHistoryInfiniteQuery,
    useLazyGetUserProfileQuery,
    useUserUpdateMutation,
} from './User';

export {
    useLazyGetUserProfileQuery,
    useLoginUserMutation,
    useSignupUserMutation,
    LoginRequest,
    SignupRequest,
    baseApi,
    useGetMoviesInfiniteQuery,
    useGetGenresFiltersQuery,
    useGetLanguageFiltersQuery,
    useLazyGetGenresFiltersQuery,
    useLazyGetLanguageFiltersQuery,
    useGetCinemasInfiniteQuery,
    useGetLocationFilterQuery,
    useGetMoviesByNameQuery,
    useLazyGetMovieSlotsQuery,
    useGetCinemaByNameQuery,
    useLazyGetCinemaSlotsQuery,
    parseSlots,
    useGetSeatAvailabilityQuery,
    useSeatBookingMutation,
    useUserUpdateMutation,
    useGetPurchaseHistoryInfiniteQuery,
    useSeatCancelMutation,
};
