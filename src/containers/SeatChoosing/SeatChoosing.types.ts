import { SeatLayoutDataType } from 'components/SeatLayout/SeatLayout.types';

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
    handleCloseModal: () => void;
    handleBookTicket: () => void;
    handleSeatClick: (id: number, label: string) => void;
    handleConfirmTicket: () => Promise<void>;
    labels: string[];
    selectedSeat: Set<number>;
};
