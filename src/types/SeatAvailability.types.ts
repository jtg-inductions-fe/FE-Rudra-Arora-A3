import { CinemaDataType } from './Cinema.types';

export type SeatsDataType = {
    id: number;
    row_number: string;
    seat_number: number;
    available: boolean;
};

export type SeatAvailabilityResponseType = {
    seats: SeatsDataType[];
    movie: string;
    cinema: string;
    slot_price: string;
    slot_start_time: string;
} & Pick<CinemaDataType, 'location' | 'rows' | 'seats_per_row'>;
