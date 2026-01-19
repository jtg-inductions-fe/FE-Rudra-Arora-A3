import { toCapitalized } from 'utils';
import { SlotTimeFormatter } from 'utils/Slot.utils';

import { SlotCardButtonDataType, SlotCardDataType } from '@components';
import { MovieSlotsResponseType, SlotDataType } from '@types';

export const parseSlots = (response: SlotDataType): SlotCardButtonDataType => ({
    buttonId: response.id,
    buttonText: SlotTimeFormatter(response.start_time),
});

export const parseMovieSlotApi = (
    response: MovieSlotsResponseType,
): SlotCardDataType => ({
    id: response.id,
    title: `${toCapitalized(response.name)} ${toCapitalized(response.location)}`,
    buttonData: response.slots.map(parseSlots),
});
