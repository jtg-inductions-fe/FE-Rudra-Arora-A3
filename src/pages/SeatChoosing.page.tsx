import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { Box, Stack, useTheme } from '@mui/material';

import { useAppDispatch } from '@app';
import { InfoCardDataType, Loader, Typography } from '@components';
import { SeatChoosingContainer } from '@containers';
import { showSnackbar } from '@features';
import { useGetSeatAvailabilityQuery, useSeatBookingMutation } from '@services';

const SeatChoosing = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { spacing } = useTheme();

    const [bookingResponse, setBookingResponse] = useState<InfoCardDataType>();
    const [seatBooking, { isLoading }] = useSeatBookingMutation();

    const { data: seatAvailabilityData, refetch } = useGetSeatAvailabilityQuery(
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
            const errorData = (
                response.error as { data: Record<string, string[]> }
            ).data;
            dispatch(
                showSnackbar({
                    message: errorData.non_field_errors,
                    variant: 'error',
                }),
            );
        } else {
            dispatch(
                showSnackbar({
                    message: ['Seat Booked Successfully'],
                    variant: 'success',
                }),
            );
            await refetch();
            setBookingResponse(response.data);
        }
    };

    return seatAvailabilityData ? (
        <Stack gap={spacing(5)} component="section" aria-label="Seat Choosing">
            {!bookingResponse && (
                <Stack>
                    <Typography variant="h2">
                        {seatAvailabilityData?.title}
                    </Typography>
                    <Typography color="primary" variant="h3">
                        {seatAvailabilityData?.subtitle}
                    </Typography>
                </Stack>
            )}
            <Box
                component="section"
                aria-label="Seat Choosing"
                sx={{
                    overflowX: 'auto',
                    height: '100%',
                    scrollbarWidth: 'none',
                }}
            >
                <SeatChoosingContainer
                    seatAvailabilityData={seatAvailabilityData}
                    handleConfirmTicket={handleConfirmTicket}
                    bookingResponse={bookingResponse}
                    isLoadingBookingResponse={isLoading}
                />
            </Box>
        </Stack>
    ) : (
        <Loader />
    );
};

export default SeatChoosing;
