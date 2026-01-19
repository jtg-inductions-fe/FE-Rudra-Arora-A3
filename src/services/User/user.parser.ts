import { PurchaseHistoryResponseType } from 'types/Profile.types';
import {
    numberToAlphabet,
    slotDateFormatter,
    slotTimeFormatter,
    toCapitalized,
} from 'utils';

import { InfoCardDataType } from '@components';

export const parsePurchaseHistoryResponse = (
    response: PurchaseHistoryResponseType,
): InfoCardDataType => {
    const slot = response.slot[0];

    const slotTotalPrice = `₹ ${response.seats.length * slot.price}`;

    const seats = response.seats.map(
        (item) => `${numberToAlphabet(item.row)}${item.seat}`,
    );

    return {
        id: response.id,
        title: `${toCapitalized(slot.cinema)} ${toCapitalized(slot.location)} | ${slotTimeFormatter(slot.start_time)} | ${slotDateFormatter(slot.start_time)}`,
        subtitle1: slot.movie,
        subtitle2: slotTotalPrice,
        subtitle3: seats.join(', '),
    };
};
