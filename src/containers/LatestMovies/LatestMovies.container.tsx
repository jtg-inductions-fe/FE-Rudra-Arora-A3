import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

import moviePoster from '@assets/images/poster.webp';
import { Card, CardSkeleton, Grid } from '@components';
import { SUBTITLE_HEADING } from '@constants';

import { LatestMoviesProps } from './LatestMovies.types';

const LatestMoviesContainer = ({
    data,
    endRef,
    isFetching,
}: LatestMoviesProps) => {
    const navigate = useNavigate();
    return (
        <>
            <Grid container spacing={4}>
                {data?.map((item) => (
                    <Grid key={item.id}>
                        <Card
                            {...item}
                            buttonText="Show Detail"
                            subtitleHeading={SUBTITLE_HEADING}
                            posterUrl={moviePoster}
                            handleButtonClick={() =>
                                void navigate(`/movies/${item.slug}`)
                            }
                        />
                    </Grid>
                ))}
                {isFetching &&
                    Array.from({ length: 4 }).map((_, index) => (
                        <Grid key={`skeleton-${index}`}>
                            <CardSkeleton />
                        </Grid>
                    ))}
            </Grid>

            <Box ref={endRef} height={1} />
        </>
    );
};

export default LatestMoviesContainer;
