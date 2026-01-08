import { StyledChip } from './Seat.styles';
import { SeatProps } from './Seat.types';

const Seat = ({ size, ...props }: SeatProps) => (
    <StyledChip sx={{ width: `${size}px`, height: `${size}px` }} {...props} />
);

export default Seat;
