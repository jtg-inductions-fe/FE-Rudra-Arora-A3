import {
    Button,
    CardActions,
    CardMedia,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import { StyledCard, StyledCardContent } from './Card.styles';
import { CardComponentProps } from './Card.types';
import { Typography } from '../Typography';

const Card = ({
    title,
    subtitle1,
    subtitle2,
    buttonText,
    subtitleHeading,
    posterUrl,
    handleButtonClick,
}: CardComponentProps) => {
    const { breakpoints, typography } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('sm'));
    return (
        <StyledCard>
            {posterUrl && (
                <CardMedia
                    sx={{ height: typography.pxToRem(100) }}
                    component="img"
                    image={posterUrl}
                />
            )}
            <StyledCardContent>
                <Typography
                    gutterBottom={isTablet}
                    variant="h2"
                    linesToClamp={1}
                    showTooltip
                >
                    {title}
                </Typography>
                <Stack flexDirection="row" gap={1}>
                    <Typography
                        variant="body1"
                        component="span"
                        color="textSecondary"
                    >
                        {subtitleHeading.subtitle1}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="span"
                        color="textSecondary"
                        linesToClamp={1}
                        showTooltip
                    >
                        {subtitle1}
                    </Typography>
                </Stack>
                <Stack flexDirection="row" gap={1}>
                    <Typography
                        variant="body1"
                        component="span"
                        color="textSecondary"
                    >
                        {subtitleHeading.subtitle2}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="span"
                        color="textSecondary"
                        linesToClamp={1}
                        showTooltip
                    >
                        {subtitle2}
                    </Typography>
                </Stack>
            </StyledCardContent>
            <CardActions sx={{ width: '100%' }}>
                <Stack alignItems="center" width="100%">
                    <Button onClick={handleButtonClick} variant="contained">
                        {buttonText}
                    </Button>
                </Stack>
            </CardActions>
        </StyledCard>
    );
};

export default Card;
