import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import { useSeatBookingMutation } from 'services/SeatBooking/SeatBooking.services';

import { Box } from '@mui/material';

import { useAppDispatch } from '@app';
import { SeatChoosingContainer } from '@containers';
import { showSnackbar } from '@features';
import { useGetSeatAvailabilityQuery } from '@services';

const SeatChoosing = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [selectedSeat, setSelectedSeat] = useState<Set<number>>(new Set());
    const [labels, setLabels] = useState<string[]>([]);
    const [seatBooking] = useSeatBookingMutation();

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

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

    const { data: seatAvailaibilityData, refetch } =
        useGetSeatAvailabilityQuery(
            {
                id: Number(id),
            },
            { pollingInterval: 45_000 },
        );

    const handleConfirmTicket = async () => {
        await seatBooking({
            id: Number(id),
            seat_ids: Array.from(selectedSeat),
        });
        await refetch();
        void navigate('/');
    };
    return (
        <Box
            sx={{
                overflowX: 'auto',
                height: '100%',
                scrollbarWidth: 'none',
            }}
        >
            <SeatChoosingContainer
                handleCloseModal={handleCloseModal}
                handleSeatClick={handleSeatClick}
                labels={labels}
                openModal={openModal}
                seatAvailaibilityData={seatAvailaibilityData}
                selectedSeat={selectedSeat}
                handleBookTicket={handleBookTicket}
                handleConfirmTicket={handleConfirmTicket}
            />
        </Box>
    );
};

export default SeatChoosing;
