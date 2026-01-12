import { numberToAlphabet, slotTimeFormatter, toCapitalized } from 'utils';

import { InfoCardDataType } from '@components';
import { SeatBookingResponseType } from '@types';

export const parseBookingResponse = (
    response: SeatBookingResponseType,
): InfoCardDataType => {
    const seats = response.seats.map(
        (item) => `${numberToAlphabet(item.row)}${item.seat}`,
    );
    const slotTotalPrice = `₹ ${response.seats.length * response.slot_price}`;

    return {
        id: response.booking,
        title: `${toCapitalized(response.cinema_name)} ${toCapitalized(response.cinema_location)} | ${slotTimeFormatter(response.slot_time)}`,
        subtitle1: response.movie_name,
        subtitle2: slotTotalPrice,
        subtitle3: seats.join(', '),
    };
};
