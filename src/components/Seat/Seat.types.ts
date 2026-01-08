import { ChipProps } from '@mui/material';

export type SeatProps = Omit<ChipProps, 'size'> & {
    size: number;
};
