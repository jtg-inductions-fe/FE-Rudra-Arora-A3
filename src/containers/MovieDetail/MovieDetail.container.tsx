import { useNavigate } from 'react-router-dom';
import {
    DurationFormatter,
    GenreFormatter,
    LanguageFormatter,
    toCapitalized,
} from 'utils';

import { Box, Button, useTheme } from '@mui/material';

import moviePoster from '@assets/images/poster.webp';
import { InfoRow, Typography } from '@components';

import MovieDetailSkeleton from './MovieDetail.skeleton';
import {
    ContentStack,
    ImageContainer,
    MainStack,
    StyledStack,
} from './MovieDetail.styles';
import { MovieDetailContainerProps } from './MovieDetail.types';

const MovieDetailContainer = ({
    movieData,
    isFetching,
}: MovieDetailContainerProps) => {
    const { typography, palette, shape } = useTheme();
    const navigate = useNavigate();
    return !isFetching ? (
        <StyledStack component="section" aria-label="Movie Detail">
            <ImageContainer>
                <Box
                    borderRadius={typography.pxToRem(shape.borderRadius)}
                    width="100%"
                    height="100%"
                    component="img"
                    src={moviePoster}
                />
            </ImageContainer>

            <MainStack>
                <ContentStack>
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
                        {toCapitalized(movieData?.description ?? '')}
                    </Typography>
                </ContentStack>

                <Button
                    onClick={() =>
                        void navigate(`/movies/${movieData?.slug}/slots`)
                    }
                    variant="contained"
                >
                    Book Tickets
                </Button>
            </MainStack>
        </StyledStack>
    ) : (
        <MovieDetailSkeleton />
    );
};

export default MovieDetailContainer;
