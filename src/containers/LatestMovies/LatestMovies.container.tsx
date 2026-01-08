import { useNavigate } from 'react-router-dom';

import { Box, Grid2 } from '@mui/material';

import moviePoster from '@assets/images/poster.webp';
import { Card, CardSkeleton } from '@components';
import { SUBTITLE_HEADING } from '@constants';

import { LatestMoviesProps } from './LatestMovies.types';

const LatestMoviesContainer = ({
    data,
    isLoading,
    endRef,
    isFetching,
}: LatestMoviesProps) => {
    const navigate = useNavigate();
    return (
        <>
            <Grid2 container spacing={2}>
                {data?.map((item) => (
                    <Grid2 key={item.id} size={{ xs: 12, sm: 4, md: 3 }}>
                        <Card
                            title={item.title}
                            subtitle1={item.subtitle1}
                            id={item.id}
                            subtitle2={item.subtitle2}
                            buttonText="Show Detail"
                            subtitleHeading={SUBTITLE_HEADING}
                            posterUrl={moviePoster}
                            handleButtonClick={() =>
                                void navigate(`/movies/${item.slug}`)
                            }
                        />
                    </Grid2>
                ))}
                {isLoading ||
                    (isFetching &&
                        Array.from({ length: 4 }).map((_, index) => (
                            <Grid2
                                key={`skeleton-${index}`}
                                size={{ xs: 12, sm: 4, md: 3 }}
                            >
                                <CardSkeleton />
                            </Grid2>
                        )))}
            </Grid2>

            <Box ref={endRef} style={{ height: 1 }} />
        </>
    );
};

export default LatestMoviesContainer;
