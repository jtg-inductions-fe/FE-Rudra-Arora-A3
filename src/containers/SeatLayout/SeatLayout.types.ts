import { SeatChoosingDataType } from '../SeatChoosing';

export type SeatLayoutContainerProps = {
    seatAvailaibilityData: SeatChoosingDataType;
    handleConfirmTicket: (selectedSeat: Set<number>) => Promise<void>;
    isLoading: boolean;
};
