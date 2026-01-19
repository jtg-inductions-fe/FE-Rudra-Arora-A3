import { useNavigate } from 'react-router-dom';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Stack,
    useTheme,
} from '@mui/material';

import { InfoCardProps } from './InfoCard.types';
import { InfoRow } from '../InfoRow';
import { Typography } from '../Typography';

const InfoCard = ({
    title,
    subtitle1,
    subtitle2,
    buttonText,
    buttonUrl,
    subtitle3,
    id,
    INFO_CARD_CONSTANTS,
}: InfoCardProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <Stack alignItems="center" pb={1}>
            <Card
                elevation={2}
                sx={{ ...theme.mixins.flexCenter(), flexDirection: 'column' }}
            >
                <CardContent>
                    <Typography textAlign="center" variant="h2">
                        {title}
                    </Typography>
                    <Typography textAlign="center" color="primary" variant="h3">
                        {subtitle1}
                    </Typography>

                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY1}
                        value={String(id)}
                    />

                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY2}
                        value={subtitle2}
                    />

                    <InfoRow
                        label={INFO_CARD_CONSTANTS.KEY3}
                        value={subtitle3}
                    />
                </CardContent>
                {buttonText && buttonUrl && (
                    <CardActions>
                        <Button
                            onClick={() => void navigate(buttonUrl)}
                            variant="contained"
                        >
                            {buttonText}
                        </Button>
                    </CardActions>
                )}
            </Card>
        </Stack>
    );
};

export default InfoCard;
