import { useTheme } from '@mui/material';

import { StyledChip } from './Seat.styles';
import { SeatProps } from './Seat.types';

const Seat = ({ size, ...props }: SeatProps) => {
    const {
        typography: { pxToRem },
    } = useTheme();

    return (
        <StyledChip
            sx={{ width: pxToRem(size), height: pxToRem(size) }}
            {...props}
        />
    );
};

export default Seat;
