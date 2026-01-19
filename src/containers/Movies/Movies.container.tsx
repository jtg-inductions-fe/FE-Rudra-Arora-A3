import { useNavigate } from 'react-router-dom';

import moviePoster from '@assets/images/poster.webp';
import { Card, CardSkeleton, Grid } from '@components';
import { SUBTITLE_HEADING } from '@constants';

import { MoviesContainerProps } from './Movies.types';

const MoviesContainer = ({ data, isFetching }: MoviesContainerProps) => {
    const navigate = useNavigate();
    return (
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
    );
};

export default MoviesContainer;
