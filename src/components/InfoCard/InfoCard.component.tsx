import { Link } from 'react-router-dom';

import {
    Button,
    CardActions,
    CardContent,
    Stack,
    useTheme,
} from '@mui/material';

import { StyledCard } from './InfoCard.styles';
import { InfoCardProps } from './InfoCard.types';
import { InfoRow } from '../InfoRow';
import { Typography } from '../Typography';

const InfoCard = ({
    title,
    subtitle1,
    subtitle2,
    subtitle3,
    buttonText,
    linkUrl,
    id,
    INFO_CARD_CONSTANTS,
    handleButtonClick,
    isLoading,
}: InfoCardProps) => {
    const { spacing } = useTheme();

    return (
        <StyledCard elevation={3}>
            <CardContent>
                <Typography
                    textAlign="center"
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                >
                    {title}
                </Typography>

                <Typography
                    textAlign="center"
                    variant="h4"
                    color="primary"
                    mb={spacing(1.5)}
                >
                    {subtitle1}
                </Typography>

                <Stack gap={spacing(0.75)}>
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
                </Stack>
            </CardContent>

            {buttonText && (
                <CardActions>
                    {linkUrl ? (
                        <Button
                            fullWidth
                            component={Link}
                            to={linkUrl}
                            variant="contained"
                            disabled={isLoading}
                        >
                            {buttonText}
                        </Button>
                    ) : handleButtonClick ? (
                        <Button
                            fullWidth
                            variant="contained"
                            color="error"
                            onClick={() => void handleButtonClick(id)}
                            disabled={isLoading}
                        >
                            {buttonText}
                        </Button>
                    ) : null}
                </CardActions>
            )}
        </StyledCard>
    );
};

export default InfoCard;
