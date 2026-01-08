import { Grid2 } from '@mui/material';

import { Card, CardSkeleton } from '@components';
import { SUBTITLE_HEADING } from '@constants';

import { MoviesConatinerProps } from './Movies.types';

const MoviesContainer = ({ data, isLoading }: MoviesConatinerProps) => (
    <Grid2 container spacing={2}>
        {data?.map((item) =>
            isLoading ? (
                <CardSkeleton key={item.id} />
            ) : (
                <Grid2 key={item.id} size={{ xs: 12, sm: 4, md: 4 }}>
                    <Card
                        title={item.title}
                        subtitle1={item.subtitle1}
                        id={item.id}
                        subtitle2={item.subtitle2}
                        buttonText="Show Detail"
                        subtitleHeading={SUBTITLE_HEADING}
                    />
                </Grid2>
            ),
        )}
    </Grid2>
);

export default MoviesContainer;
