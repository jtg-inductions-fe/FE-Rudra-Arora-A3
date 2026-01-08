import { SeatLayoutDataType } from 'components/SeatLayout/SeatLayout.types';
import { SeatChoosingDataType } from 'containers/SeatChoosing/SeatChoosing.types';
import { SeatsDataType } from 'types/SeatAvailability.types';
import {
    numberToAlphabet,
    slotDateFormatter,
    SlotTimeFormatter,
    toCapitalized,
} from 'utils';

import { SeatAvailabilityResponseType } from '@types';

export const parseSeatResponse = (
    response: SeatsDataType,
): SeatLayoutDataType => ({
    id: response.id,
    rowNumber: response.row_number,
    seatNumber: response.seat_number,
    availaible: response.available,
    label: `${numberToAlphabet(Number(response.row_number))}${response.seat_number}`,
});

export const parseSeatAvailabilityResponse = (
    response: SeatAvailabilityResponseType,
): SeatChoosingDataType => ({
    title: `${toCapitalized(response.cinema)} ${toCapitalized(response.location)} | ${response.slot_price} ₹`,
    subtitle: `${response.movie} | ${SlotTimeFormatter(response.slot_start_time)} | ${slotDateFormatter(response.slot_start_time)}`,
    rows: response.rows,
    slotDate: response.slot_start_time,
    slotTime: response.slot_start_time,
    slotPrice: `${response.slot_price}`,
    seatsData: response.seats.map(parseSeatResponse),
});
