import { MovieDataType } from './Movies.types';
import { SlotDataType } from './MovieSlots.types';

export type CinemaSlotsResponseType = {
    slots: SlotDataType[];
} & Pick<MovieDataType, 'id' | 'name' | 'languages' | 'duration'>;
