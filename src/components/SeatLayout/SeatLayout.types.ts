export type SeatLayoutDataType = {
    id: number;
    rowNumber: string;
    seatNumber: number;
    available: boolean;
    label: string;
};

export type SeatLayoutProps = {
    seatsData?: SeatLayoutDataType[];
    rows?: number;
    handleSeatClick: (id: number, label: string) => void;
    selectedSeat: Set<number>;
    size: number;
};
