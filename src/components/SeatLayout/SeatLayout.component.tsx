import { Box, useTheme } from '@mui/material';

import { SeatLayoutProps } from './SeatLayout.types';
import { Seat } from '../Seat';

const SeatLayout = ({
    seatsData,
    handleSeatClick,
    rows,
    selectedSeat,
    size,
}: SeatLayoutProps) => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <Box
            gap={3}
            display="grid"
            gridTemplateColumns={`repeat(${rows}, ${pxToRem(size)})`}
        >
            {seatsData?.map((item) => (
                <Seat
                    key={item.id}
                    clickable
                    size={size}
                    variant={selectedSeat.has(item.id) ? 'filled' : 'outlined'}
                    label={item.label}
                    onClick={() => handleSeatClick(item.id, item.label)}
                    disabled={!item.available}
                    color={item.available ? 'primary' : 'warning'}
                />
            ))}
        </Box>
    );
};

export default SeatLayout;
