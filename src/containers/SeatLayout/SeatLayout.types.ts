import { SeatChoosingDataType } from '../SeatChoosing';

export type SeatLayoutContainerProps = {
    seatAvailabilityData: SeatChoosingDataType;
    handleConfirmTicket: (selectedSeat: Set<number>) => Promise<void>;
    isLoading: boolean;
};
