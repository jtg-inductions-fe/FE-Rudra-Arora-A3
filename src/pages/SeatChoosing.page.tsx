import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { useAppDispatch } from '@app';
import { ErrorBoundary, InfoCardDataType } from '@components';
import { SeatChoosingContainer } from '@containers';
import { showSnackbar } from '@features';
import { useSeatBookingMutation } from '@services';
import { useGetSeatAvailabilityQuery } from '@services';

const SeatChoosing = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const [selectedSeat, setSelectedSeat] = useState<Set<number>>(new Set());
    const [bookingResponse, setBookingResponse] = useState<InfoCardDataType>();
    const [labels, setLabels] = useState<string[]>([]);
    const [seatBooking] = useSeatBookingMutation();

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

            setLabels((prev) => prev.filter((item) => item === label));
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

    const {
        data: seatAvailaibilityData,
        refetch,
        error,
    } = useGetSeatAvailabilityQuery(
        {
            id: Number(id),
        },
        { pollingInterval: 45_000 },
    );

    /**
     * Function to handle Conforming of Ticket
     */
    const handleConfirmTicket = async () => {
        const response = await seatBooking({
            id: Number(id),
            seat_ids: Array.from(selectedSeat),
        });
        if (response.error) {
            dispatch(
                showSnackbar({
                    message: ['Some error have occured'],
                    variant: 'error',
                }),
            );
        }
        setBookingResponse(response.data);
        await refetch();
    };

    return (
        <Box
            sx={{
                overflowX: 'auto',
                height: '100%',
                scrollbarWidth: 'none',
            }}
        >
            <ErrorBoundary error={error}>
                <SeatChoosingContainer
                    handleCloseModal={handleCloseModal}
                    handleSeatClick={handleSeatClick}
                    labels={labels}
                    openModal={openModal}
                    seatAvailaibilityData={seatAvailaibilityData}
                    selectedSeat={selectedSeat}
                    handleBookTicket={handleBookTicket}
                    handleConfirmTicket={handleConfirmTicket}
                    bookingResponse={bookingResponse}
                />
            </ErrorBoundary>
        </Box>
    );
};

export default SeatChoosing;
