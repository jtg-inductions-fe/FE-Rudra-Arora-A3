import { Grid2, Stack, Typography } from '@mui/material';

import { Card, CardSkeleton } from '@components';
import { LatestMoviesHeading, subtitleHeading } from '@constants';
import { useGetMoviesQuery } from '@services';

const LatestMoviesContainer = () => {
    const { data, isLoading } = useGetMoviesQuery({ latest: true });
    return (
        <Stack>
            <Typography variant="h1">{LatestMoviesHeading}</Typography>
            <Grid2 container spacing={2}>
                {data?.results.map((item) =>
                    isLoading ? (
                        <Grid2 key={item.id} size={{ xs: 12, sm: 4, md: 3 }}>
                            <CardSkeleton key={item.id} />
                        </Grid2>
                    ) : (
                        <Grid2 key={item.id} size={{ xs: 12, sm: 4, md: 3 }}>
                            <Card
                                title={item.title}
                                subtitle1={item.subtitle1}
                                id={item.id}
                                subtitle2={item.subtitle2}
                                buttonText="Show Detail"
                                subtitleHeading={subtitleHeading}
                            />
                        </Grid2>
                    ),
                )}
            </Grid2>
        </Stack>
    );
};

export default LatestMoviesContainer;
