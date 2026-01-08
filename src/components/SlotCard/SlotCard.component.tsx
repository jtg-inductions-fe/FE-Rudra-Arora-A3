import {
    Button,
    CardContent,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { StyledCard } from './SlotCard.styles';
import { SlotCardProps } from './SlotCard.types';
import { Typography } from '../Typography';

const SlotCard = ({ title, buttonData }: SlotCardProps) => {
    const { typography, breakpoints } = useTheme();
    const isDesktop = useMediaQuery(breakpoints.up('md'));
    const theme = useTheme();
    return (
        <StyledCard>
            <CardContent sx={{ p: 0, minWidth: theme.typography.pxToRem(300) }}>
                <Typography variant="h2">{title}</Typography>
            </CardContent>
            <Stack
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={typography.pxToRem(10)}
            >
                {buttonData.map((item) => (
                    <Button
                        sx={{
                            maxWidth: isDesktop
                                ? typography.pxToRem(110)
                                : typography.pxToRem(90),
                        }}
                        key={item.buttonId}
                        variant="outlined"
                    >
                        {item.buttonText}
                    </Button>
                ))}
            </Stack>
        </StyledCard>
    );
};

export default SlotCard;
