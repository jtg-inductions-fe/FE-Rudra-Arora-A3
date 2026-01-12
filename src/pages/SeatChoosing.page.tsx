import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box } from '@mui/material';

import { useAppDispatch } from '@app';
import { ErrorBoundary, InfoCardDataType, Loader } from '@components';
import { SeatChoosingContainer } from '@containers';
import { showSnackbar } from '@features';
import { useSeatBookingMutation } from '@services';
import { useGetSeatAvailabilityQuery } from '@services';

const SeatChoosing = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const [bookingResponse, setBookingResponse] = useState<InfoCardDataType>();
    const [seatBooking] = useSeatBookingMutation();

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
    const handleConfirmTicket = async (selectedSeat: Set<number>) => {
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
                {seatAvailaibilityData ? (
                    <SeatChoosingContainer
                        seatAvailaibilityData={seatAvailaibilityData}
                        handleConfirmTicket={handleConfirmTicket}
                        bookingResponse={bookingResponse}
                    />
                ) : (
                    <Loader />
                )}
            </ErrorBoundary>
        </Box>
    );
};

export default SeatChoosing;
