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
    subtitle3,
}: CardComponentProps) => {
    const { breakpoints, typography, spacing } = useTheme();
    const isTablet = useMediaQuery(breakpoints.up('sm'));

    return (
        <StyledCard>
            {posterUrl && (
                <CardMedia
                    sx={{ height: typography.pxToRem(100) }}
                    component="img"
                    image={posterUrl}
                    alt="Poster"
                />
            )}
            <Stack gap={spacing(4)} padding={spacing(3, 4)}>
                <StyledCardContent>
                    <Typography
                        gutterBottom={isTablet}
                        variant="h2"
                        linesToClamp={1}
                        showTooltip
                    >
                        {title}
                    </Typography>
                    <Stack gap={spacing(2)}>
                        <Typography
                            variant="body1"
                            component="span"
                            color="textSecondary"
                            linesToClamp={3}
                            showTooltip
                        >
                            {subtitle3}
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
                    </Stack>
                </StyledCardContent>
                <CardActions sx={{ padding: 0 }}>
                    <Button
                        fullWidth
                        onClick={handleButtonClick}
                        variant="contained"
                    >
                        {buttonText}
                    </Button>
                </CardActions>
            </Stack>
        </StyledCard>
    );
};

export default Card;
