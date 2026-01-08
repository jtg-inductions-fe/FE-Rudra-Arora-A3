import { Grid2 } from '@mui/material';

import { Card, CardSkeleton } from '@components';
import { CINEMA_SUBTITLE_HEADING } from '@constants';

import { CinemasConatinerProps } from './Cinemas.types';

const CinemasContainer = ({ data, isLoading }: CinemasConatinerProps) => (
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
                        buttonText="Book Tickets"
                        subtitleHeading={CINEMA_SUBTITLE_HEADING}
                    />
                </Grid2>
            ),
        )}
    </Grid2>
);

export default CinemasContainer;
