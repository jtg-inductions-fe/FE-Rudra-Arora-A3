import {
    useLazyGetCinemaSlotsQuery,
    useLazyGetMovieSlotsQuery,
} from '@services';

type MovieSlotsTriggerType = ReturnType<typeof useLazyGetMovieSlotsQuery>[0];
type CinemaSlotsTriggerType = ReturnType<typeof useLazyGetCinemaSlotsQuery>[0];

export type SlotContainerProps = {
    id: number;
    heading: string;
    subHeading?: string;
    trigger: MovieSlotsTriggerType | CinemaSlotsTriggerType;
    isFetchingSlotData: boolean;
};
