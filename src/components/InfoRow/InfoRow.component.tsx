import { Stack, useTheme } from '@mui/material';

import { InfoRowProps } from './InfoRow.types';
import { Typography } from '../Typography';

const InfoRow = ({ label, value }: InfoRowProps) => {
    const { typography } = useTheme();

    return (
        <Stack
            flexDirection="row"
            gap={typography.pxToRem(4)}
            justifyContent="center"
        >
            <Typography component="span" variant="body1">
                {label}:
            </Typography>
            <Typography
                linesToClamp={1}
                showTooltip
                variant="body1"
                component="span"
            >
                {value}
            </Typography>
        </Stack>
    );
};

export default InfoRow;
