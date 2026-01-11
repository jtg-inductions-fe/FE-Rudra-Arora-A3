import { Box, Button, Stack } from '@mui/material';

import screen from '@assets/images/screen.svg';
import { Modal, Seat, SeatLayout, Typography } from '@components';
import { ROUTES, SEAT_CHOOSING_CONSTANTS } from '@constants';

import { Container, InfoStack } from './SeatChoosing.styles';
import { SeatChoosingContainerProps } from './SeatChoosing.types';
import { TicketContainer } from '../Ticket';

const SeatChoosingContainer = ({
    handleCloseModal,
    handleSeatClick,
    openModal,
    labels,
    seatAvailaibilityData,
    selectedSeat,
    handleBookTicket,
    handleConfirmTicket,
    bookingResponse,
}: SeatChoosingContainerProps) =>
    bookingResponse === undefined ? (
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

            <Stack gap={10} alignItems="center">
                <SeatLayout
                    handleSeatClick={handleSeatClick}
                    rows={seatAvailaibilityData?.rows}
                    selectedSeat={selectedSeat}
                    seatsData={seatAvailaibilityData?.seatsData}
                    size={50}
                />

                <Button onClick={handleBookTicket} variant="contained">
                    Book
                </Button>

                <Modal
                    openModal={openModal}
                    handleCloseModal={handleCloseModal}
                    labels={labels}
                    title={seatAvailaibilityData?.title}
                    subtitle1={seatAvailaibilityData?.subtitle}
                    subtitle2={seatAvailaibilityData?.slotPrice}
                    handleButtonClick={handleConfirmTicket}
                    buttonText="Confirm Ticket"
                    keys={SEAT_CHOOSING_CONSTANTS.KEYS}
                />
            </Stack>
        </Container>
    ) : (
        <TicketContainer
            {...bookingResponse}
            buttonText="Go Home"
            linkUrl={ROUTES.ROOT}
            subtitle2={`${Number(bookingResponse.subtitle2) * labels.length} ₹`}
            subtitle3={labels.join(', ')}
            heading="Your Ticket is Booked"
        />
    );

export default SeatChoosingContainer;
