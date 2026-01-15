import { memo } from 'react';

import { Box, Stack } from '@mui/material';

import screen from '@assets/images/screen.svg';
import { Seat, Typography } from '@components';
import { ROUTES, SEAT_CHOOSING_CONSTANTS } from '@constants';

import { Container, InfoStack } from './SeatChoosing.styles';
import { SeatChoosingContainerProps } from './SeatChoosing.types';
import { SeatLayoutContainer } from '../SeatLayout';
import { TicketContainer } from '../Ticket';

const SeatChoosingContainer = ({
    seatAvailaibilityData,
    handleConfirmTicket,
    bookingResponse,
    isLoadingBookingResponse,
}: SeatChoosingContainerProps) =>
    !bookingResponse ? (
        <Container>
            <Stack>
                <Typography variant="h2">
                    {seatAvailaibilityData?.title}
                </Typography>
                <Typography color="primary" variant="h3">
                    {seatAvailaibilityData?.subtitle}
                </Typography>
            </Stack>

            <InfoStack>
                {SEAT_CHOOSING_CONSTANTS.INFO_STACK.map((info) => (
                    <Stack
                        key={info.MESSAGE}
                        gap={2}
                        direction="row"
                        alignItems="center"
                    >
                        <Seat
                            size={20}
                            disabled={info.DISABLED}
                            color="primary"
                            variant={info.VARIANT}
                        />
                        <Typography variant="body1">{info.MESSAGE}</Typography>
                    </Stack>
                ))}
            </InfoStack>

            <Stack alignItems="center">
                <Box width="50%" component="img" src={screen} />
                <Typography color="textSecondary" variant="subtitle2">
                    Screen This Way
                </Typography>
            </Stack>

            {seatAvailaibilityData && (
                <SeatLayoutContainer
                    handleConfirmTicket={handleConfirmTicket}
                    seatAvailaibilityData={seatAvailaibilityData}
                    isLoading={isLoadingBookingResponse}
                />
            )}
        </Container>
    ) : (
        <TicketContainer
            {...bookingResponse}
            buttonText="Go Home"
            linkUrl={ROUTES.ROOT}
            heading="Your Ticket is Booked"
        />
    );

export default memo(SeatChoosingContainer);
