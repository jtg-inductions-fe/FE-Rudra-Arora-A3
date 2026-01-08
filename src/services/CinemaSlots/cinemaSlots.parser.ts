import { LanguageFormatter, toCapitalized } from 'utils';

import { SlotCardDataType } from '@components';
import { parseSlots } from '@services';
import { CinemaSlotsResponseType } from '@types';

export const parseCinemaSlotApi = (
    response: CinemaSlotsResponseType,
): SlotCardDataType => ({
    id: response.id,
    title: toCapitalized(response.name),
    subtitle1: LanguageFormatter(response.languages),
    buttonData: response.slots.map(parseSlots),
});
