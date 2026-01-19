import { SlotTimeFormatter, toCapitalized } from 'utils';

import { InfoCardDataType } from '@components';
import { SeatBookingResponseType } from '@types';

export const parseBookingResponse = (
    response: SeatBookingResponseType,
): InfoCardDataType => ({
    id: response.booking.id,
    title: `${toCapitalized(response.cinema_name)} ${toCapitalized(response.cinema_location)} | ${SlotTimeFormatter(response.slot_time)}`,
    subtitle1: response.movie_name,
    subtitle2: `${response.slot_price}`,
});
