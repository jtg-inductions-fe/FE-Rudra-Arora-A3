import { useNavigate } from 'react-router-dom';
import { DurationFormatter, GenreFormatter, LanguageFormatter } from 'utils';

import { Box, Button, Stack, useTheme } from '@mui/material';

import moviePoster from '@assets/images/poster.webp';
import { InfoRow, Typography } from '@components';

import { ImageContainer, StyledStack } from './MovieDetail.styles';
import { MovieDetailContainerProps } from './MovieDetail.types';

const MovieDetailContainer = ({ movieData }: MovieDetailContainerProps) => {
    const { typography, palette } = useTheme();
    const navigate = useNavigate();
    return (
        <StyledStack>
            <ImageContainer>
                <Box
                    borderRadius={typography.pxToRem(20)}
                    width="100%"
                    height="100%"
                    component="img"
                    src={moviePoster}
                />
            </ImageContainer>

            <Stack
                gap={typography.pxToRem(5)}
                width="80%"
                alignItems="flex-start"
            >
                <Typography linesToClamp={2} showTooltip variant="h1">
                    {movieData?.name}
                </Typography>

                <Typography color="primary" variant="body1">
                    {GenreFormatter(movieData?.genres ?? [''])}
                </Typography>

                <InfoRow
                    label="Language"
                    value={LanguageFormatter(movieData?.languages ?? [''])}
                />

                <InfoRow
                    label="Duration"
                    value={DurationFormatter(movieData?.duration ?? '')}
                />

                <InfoRow
                    label="Release Date"
                    value={movieData?.release_date ?? ''}
                />

                <Typography
                    linesToClamp={4}
                    showTooltip
                    variant="body1"
                    color={palette.grey[700]}
                >
                    {movieData?.description}
                </Typography>

                <Button
                    onClick={() =>
                        void navigate(`/movies/${movieData?.slug}/slots`)
                    }
                    variant="contained"
                >
                    Book Tickes
                </Button>
            </Stack>
        </StyledStack>
    );
};

export default MovieDetailContainer;
