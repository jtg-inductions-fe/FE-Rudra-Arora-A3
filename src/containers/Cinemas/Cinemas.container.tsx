import { useNavigate } from 'react-router-dom';

import { Card, CardSkeleton, Grid } from '@components';
import { CINEMA_SUBTITLE_HEADING } from '@constants';

import { CinemasContainerProps } from './Cinemas.types';

const CinemasContainer = ({ data, isFetching }: CinemasContainerProps) => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={2}>
            {data?.map((item) => (
                <Grid key={item.id}>
                    <Card
                        title={item.title}
                        subtitle1={item.subtitle1}
                        id={item.id}
                        buttonText="Book Tickets"
                        subtitleHeading={CINEMA_SUBTITLE_HEADING}
                        handleButtonClick={() =>
                            void navigate(`/cinemas/${item.slug}/slots`)
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

export default CinemasContainer;
