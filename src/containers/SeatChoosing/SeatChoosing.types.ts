import { InfoCardDataType, SeatLayoutDataType } from '@components';

export type SeatChoosingDataType = {
    seatsData: SeatLayoutDataType[];
    title: string;
    subtitle: string;
    slotPrice: string;
    slotTime: string;
    slotDate: string;
    rows: number;
};

export type SeatChoosingContainerProps = {
    seatAvailaibilityData: SeatChoosingDataType;
    bookingResponse?: InfoCardDataType;
    isLoadingBookingResponse: boolean;
    handleConfirmTicket: (selectedSeat: Set<number>) => Promise<void>;
};
