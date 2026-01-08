import { toCapitalized } from 'utils';
import { SlotTimeFormatter } from 'utils/Slot.utils';

import { SlotCardButtonDataType } from '@components';
import { SlotCardDataType } from '@components';
import { SlotDataType } from '@types';
import { MovieSlotsResponseType } from '@types';

const parseSlots = (response: SlotDataType): SlotCardButtonDataType => ({
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
