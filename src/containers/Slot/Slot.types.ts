import { useLazyGetMovieSlotsQuery } from '@services';

type MovieSlotsTriggerType = ReturnType<typeof useLazyGetMovieSlotsQuery>[0];

export type SlotContainerProps = {
    id?: number;
    heading?: string;
    subHeading?: string;
    trigger: MovieSlotsTriggerType;
};
