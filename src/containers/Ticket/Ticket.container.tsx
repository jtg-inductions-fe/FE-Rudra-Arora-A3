import { InfoCard, Typography } from '@components';
import { SEAT_BOOKING_CONSTANTS } from '@constants';

import { TicketContainerProps } from './Ticket.types';

const TicketContainer = ({ ...data }: TicketContainerProps) => (
    <>
        <Typography textAlign="center" variant="h1">
            Your Ticket is Booked
        </Typography>
        <InfoCard {...data} INFO_CARD_CONSTANTS={SEAT_BOOKING_CONSTANTS} />
    </>
);

export default TicketContainer;
