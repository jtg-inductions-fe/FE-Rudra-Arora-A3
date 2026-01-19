import { useState } from 'react';

import { Button, Stack } from '@mui/material';

import { useAppDispatch } from '@app';
import { Modal, SeatLayout } from '@components';
import { SEAT_CHOOSING_CONSTANTS } from '@constants';
import { showSnackbar } from '@features';

import { SeatLayoutContainerProps } from './SeatLayout.types';

const SeatLayoutContainer = ({
    seatAvailabilityData,
    handleConfirmTicket,
    isLoading,
}: SeatLayoutContainerProps) => {
    const dispatch = useAppDispatch();

    const [selectedSeat, setSelectedSeat] = useState<Set<number>>(new Set());
    const [labels, setLabels] = useState<string[]>([]);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    /**
     * Function to handle Seat click state
     * @param seatId
     * @param label
     */
    const handleSeatClick = (seatId: number, label: string) => {
        if (selectedSeat.has(seatId)) {
            setSelectedSeat((prev) => {
                const temp = new Set(prev);
                temp.delete(seatId);
                return temp;
            });

            setLabels((prev) => prev.filter((item) => item !== label));
        } else {
            setSelectedSeat((prev) => {
                const temp = new Set(prev);
                return temp.add(seatId);
            });
            setLabels((prev) => [...prev, label]);
        }
    };

    /**
     * Function to handle Book Button that opens a modal to confirm ticket
     */
    const handleBookTicket = () => {
        if (labels.length) {
            handleOpenModal();
        } else {
            dispatch(
                showSnackbar({
                    message: ['Please select a seat'],
                    variant: 'info',
                }),
            );
        }
    };

    const handleSeatConfirmation = () => handleConfirmTicket(selectedSeat);
    return (
        <Stack gap={10} alignItems="center">
            <SeatLayout
                handleSeatClick={handleSeatClick}
                rows={seatAvailabilityData?.rows}
                selectedSeat={selectedSeat}
                seatsData={seatAvailabilityData?.seatsData}
                size={50}
            />

            <Button onClick={handleBookTicket} variant="contained">
                Book
            </Button>

            <Modal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                labels={labels}
                title={seatAvailabilityData?.title}
                subtitle1={seatAvailabilityData?.subtitle}
                subtitle2={seatAvailabilityData?.slotPrice}
                handleButtonClick={handleSeatConfirmation}
                buttonText="Confirm Ticket"
                keys={SEAT_CHOOSING_CONSTANTS.KEYS}
                isLoading={isLoading}
            />
        </Stack>
    );
};

export default SeatLayoutContainer;
