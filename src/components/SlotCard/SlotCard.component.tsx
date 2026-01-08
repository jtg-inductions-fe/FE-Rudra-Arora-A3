import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    return (
        <StyledCard>
            <CardContent
                sx={{
                    p: 0,
                    minWidth: theme.typography.pxToRem(300),
                    maxWidth: theme.typography.pxToRem(350),
                }}
            >
                <Typography linesToClamp={2} variant="h2">
                    {title}
                </Typography>
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
                        onClick={() =>
                            void navigate(`/slots/${item.buttonId}/seats`)
                        }
                    >
                        {item.buttonText}
                    </Button>
                ))}
            </Stack>
        </StyledCard>
    );
};

export default SlotCard;
