import { CinemaDataType } from './Cinema.types';

export type SlotDataType = {
    end_time: string;
    id: number;
    price: string;
    start_time: string;
};

export type MovieSlotsResponseType = {
    slots: SlotDataType[];
} & Pick<CinemaDataType, 'id' | 'location' | 'name' | 'rows' | 'seats_per_row'>;
