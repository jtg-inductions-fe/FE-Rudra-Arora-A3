import { PurchasedSeatType } from './Profile.types';

export type SeatBookingResponseType = {
    booking: number;
    cinema_name: string;
    cinema_location: string;
    movie_name: string;
    slot_time: string;
    slot_price: number;
    seats: PurchasedSeatType[];
};
