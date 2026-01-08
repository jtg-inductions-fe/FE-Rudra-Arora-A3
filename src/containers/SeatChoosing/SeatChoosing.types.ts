import { SeatLayoutDataType } from 'components/SeatLayout/SeatLayout.types';

import { InfoCardDataType } from '@components';

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
    seatAvailaibilityData?: SeatChoosingDataType;
    openModal: boolean;
    labels: string[];
    selectedSeat: Set<number>;
    bookingResponse?: InfoCardDataType;
    handleCloseModal: () => void;
    handleBookTicket: () => void;
    handleSeatClick: (id: number, label: string) => void;
    handleConfirmTicket: () => Promise<void>;
};
