import { Stack } from '@mui/material';

import { InfoCard, Typography } from '@components';
import { SEAT_BOOKING_CONSTANTS } from '@constants';

import { TicketContainerProps } from './Ticket.types';

const TicketContainer = ({ ...data }: TicketContainerProps) => (
    <Stack gap={2} alignItems="center" pb={2}>
        <Typography textAlign="center" variant="h1">
            {data.heading}
        </Typography>
        <InfoCard {...data} INFO_CARD_CONSTANTS={SEAT_BOOKING_CONSTANTS} />
    </Stack>
);

export default TicketContainer;
